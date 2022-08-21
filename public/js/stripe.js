/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async (tourId) => {
  const stripe = Stripe(
    'pk_test_51LYKf7BHlvkkAyPZM9eDvP9bEs1FgwJlR4OYQZGQGu5C7MDQoElt8BuRZrXsIP7QC5RW0FocHPlPwhiLdOf6EssL00OzDuWblA'
  );
  try {
    //1. get checkout session from API
    const session = await axios(
      `http://localhost:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);
    //2. create checkout form + charge credic card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
