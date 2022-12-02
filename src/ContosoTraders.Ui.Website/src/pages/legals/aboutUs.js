import React from 'react';
import Breadcrump from '../../components/breadcrumb.js'
import { useHistory } from 'react-router-dom';
const AboutUs = (props) => {
    const history = useHistory();
    const currentCategory = history.location.pathname.split("/").pop().replaceAll('-',' ');
    return (
        <>
            <div className='refund-policy-section'>
                <Breadcrump currentPath={currentCategory} />
                <div className="refund-policy">
                    <p className="mainHeading">About Us</p>
                    <p className="subHeading">Our Mission</p>
                    <p className="paragraph">
                        To demonstrate passion by delivering quality products and spread the WOW factor among our customers. We aspire to be a brand that caters to youth and accessories their lifestyle with funky and colorful accessories.
                    </p>
                    <p className="subHeading">Who Are We?</p>
                    <p className="paragraph">
                        At ContosoTraders, we create pathways to connect millions of buyers in more than 190 markets around the world. Our technology empowers our customers, providing everyone the opportunity to grow and thrive — no matter who they are or where they are in the world. And the ripple effect of our work creates waves of change for our customers, our company, our communities and our planet.
                    </p>
                    <p className="subHeading">Technology</p>
                    <p className="paragraph">
                        ContosoTraders creates inspiring ecommerce experiences for our buyers. Embracing innovation has been a cornerstone of our growth and customer loyalty for more than 25 years – encompassing technologies such as AI, computer vision, natural language processing and machine translation.
                    </p>
                    <p className="subHeading">Who Are We Looking For?</p>
                    <p className="paragraph">
                        Anyone who can think creatively and innovatively, we are NOT looking for people who can only work protocol on the internet.<br/>
                        Absolutely not believe in ‘chalta hai’, come with a do-or-die attitude.<br/>
                        Willing to put in immense endeavor in keeping unlocktrends in its rightful place at the top of the pile.<br/>
                        Have very high standards for themselves and work enthusiastically to achieve them.<br/>
                        Persevere and persist in problem solving and don’t have the word “quit” in their dictionary<br/>
                        Are passionate and driven by purpose to achieve great things in life<br/>
                        Are intelligent yet humble, and know how to be a team player.<br/>
                        Are fun to hang out with, both at a party as well as at a midnight hack-a-thon<br/>
                        Don’t have all the answers, but sure know how to find them<br/>
                        Consider going the extra mile, a norm<br/>
                    </p>
                    <p className="subHeading">Why Should You Work With Us?</p>
                    <p className="paragraph">
                        One Team- We work as one team that wants to achieve more and learn more.<br/>
                        Focused- We stay focused and have Out-of the Box- Thinking. Try to give our best by pushing ourselves to our limits.<br/>
                        Accessible-We believe in staying connected and welcome new ideas, thoughts, feedbacks, questions.<br/>
                        Grow Ahead- We believe in long term returns, no matter how much we have achieved, there is still more to learn and grow. Think ahead, there are no shortcuts.
                    </p>
                </div>
            </div>
            <hr/>
        </>
     );
}

export default AboutUs;