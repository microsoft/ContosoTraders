import React from 'react';
import Breadcrump from '../../components/breadcrumb.js'
import { useHistory } from 'react-router-dom';
const RefundPolicy = (props) => {
    const history = useHistory();
    const currentCategory = history.location.pathname.split("/").pop().replaceAll('-',' ');
    return (
        <>
            <div className='refund-policy-section'>
                <Breadcrump currentPath={currentCategory} />
                <div className="refund-policy">
                    <p className="mainHeading">Refund Policy</p>
                    <p className="subHeading">Can I refund an order through the Sell in contosotraders.com?</p>
                    <p className="paragraph">
                        You can issue a full refund through the Sell on contosotraders.com. However, if you want to issue a partial refund, you need to use contosotraders.com. <br/>
                    </p>
                    <p className="subHeading">What can I issue a refund for? </p>
                    <p className="paragraph">
                        You can issue any refund in accordance with your shop policies. You can also issue refunds if: <br/><br/>
                        If you agree to issue a refund to the buyer <br/>
                        If the buyer is overcharged for shipping <br/>
                        If the buyer forgot to apply a shop coupon <br/>
                        How do I pay for a refund? <br/>
                        If you use contosotraders Payments, the funds for the refund are deducted from your Payment account. If your Payment account doesn’t have enough funds to cover the refund, your credit card on file will be charged for the remaining amount. <br/><br/>
                        If you use another payment method, you’ll need to refund the order through that payment method. <br/>
                    </p>
                    <p className="subHeading">When can I issue a refund? </p>
                    <p className="paragraph">
                        If you use contosotraders Payments, you can issue a refund after the payment is processed, and before 180 days after the payment is processed. After 180 days have passed, you can’t refund an order through Etsy Payments. <br/><br/>
                        If your shop has a policy that allows for refunds after 180 days, you can refund the buyer through a payment method outside of contosotraders, such as PayPal. If you issue this type of refund, contosotraders won’t be able to refund your seller fees.<br/>
                    </p>
                    <p className="subHeading">When can’t I issue a refund? </p>
                    <p className="paragraph">
                        If the Issue a Refund button isn’t available, it means the order is non-refundable. <br/><br/>
                        The order may be non-refundable if 180 days have passed since the purchase date, or if the buyer has filed a chargeback for the order. A chargeback is when funds are returned to a buyer after they report an incorrect or unwanted transaction to their financial institution, such as their credit card company, bank, or PayPal. The buyer will need to work directly with their financial institution toward a resolution.<br/>
                    </p>
                </div>
            </div>
            <hr/>
        </>
     );
}

export default RefundPolicy;