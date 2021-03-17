import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IW313Dhuz6CNce6tN9ZqSNAX1fjYveuLMdVjYKoMwQPYCVSqQxaCeQMZRRl86dZ9YIpISSiGJLNpIubobK8FRAt00z4Fp7MF2';

    const onToken = token => {
        console.log(token);
        alert('Payments Successful');
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;