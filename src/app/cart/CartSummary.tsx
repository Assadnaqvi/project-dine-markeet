import toast from 'react-hot-toast';
import { getUserIdentifier } from '@/lib/cookies'; 
import React, { useContext, useEffect, useState } from 'react';
import { DineMarketContext } from '@/context/DineMarketContext';
import getStripePromise from '@/lib/stripe'; 
interface CartSummaryProps {
  bDisabled: boolean;
  setBDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}
export const CartSummary: React.FC<CartSummaryProps> = ({
  bDisabled,
  setBDisabled,
}) => {
  const userId = getUserIdentifier() as string;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const dmContext = useContext(DineMarketContext);

  const [qunat, setQuant] = useState(null);
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);

  async function checkoutHandle() {
    const toastId = toast.loading("trying checkout");
    setBDisabled(true);
    const stripe = await getStripePromise();
    fetch(`${baseUrl}api/stripe`, {
      method: "POST",
      headers: { Authorization: userId, "Content-Type": "application/json" },
      cache: "no-cache",
    })
      .then((response) => response.json())
      .then((response) => {
        toast.dismiss(toastId);
        if (response.success === false || !stripe) {
          toast.error("checkout failed");
        } else {
          toast.loading("Redirecting...");
          stripe.redirectToCheckout({ sessionId: response.id });
        }
      })
      .catch(() => {
        toast.dismiss(toastId);
        toast.error("checkout failed");
        setBDisabled(false);
      });
  }
  async function getCartSummary(userId: string) {
    fetch(`${baseUrl}api/cart`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${userId}`,
      },
      cache: 'no-cache',
    })
      .then((response) => response.json())
      .then((response) => {
        setQuant(response[0].quant);
        setPrice(response[0].price);
        setLoading(false);
      });
  }
  useEffect(() => {
    setLoading(true);
    getCartSummary(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dmContext?.cartItems]);

  return (
    <div className='flex flex-col items-center justify-center space-y-7 rounded-md bg-gray-100 p-5 text-[#181818]'>
      <p className='w-full text-xl font-bold'>Order Summary</p>
      <p className='inline-flex w-full justify-between text-base font-normal'>
        <span>Quantity</span>
        <span>
          {qunat} {qunat! > 1 ? 'Products' : 'Product'}
        </span>
      </p>
      <p className='inline-flex w-full justify-between text-base font-normal'>
        <span>Sub Total</span>
        <span>${price}</span>
      </p>
      <button
        className={`w-full whitespace-nowrap rounded-md bg-[#212121] px-3 py-2 text-white ${
          !bDisabled
            ? 'cursor-pointer'
            : 'cursor-not-allowed disabled:opacity-50'
        }`}
        onClick={checkoutHandle}
        disabled={bDisabled}
      >
        Process to Checkout
      </button>
    </div>
  );
};