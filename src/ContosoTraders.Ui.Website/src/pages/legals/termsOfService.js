import React from 'react';
import Breadcrump from '../../components/breadcrumb.js'
import { useHistory } from 'react-router-dom';
const TermsOfService = (props) => {
    const history = useHistory();
    const currentCategory = history.location.pathname.split("/").pop().replaceAll('-',' ');
    return (
        <>
            <div className='refund-policy-section'>
                <Breadcrump currentPath={currentCategory} />
                <div className="refund-policy">
                    <p className="mainHeading">Terms Of Service</p>
                    <p className="subHeading">OVERVIEW</p>
                    <p className="paragraph">
                        Welcome to ContosoTraders.com (the “Site”), owned and operated by ContosoTraders Inc. By accessing ebayinc.com you agree to the following Terms of Use. These Terms of Use are effective as of October 9, 2009. <br/><br/>

                        
                        <b>Using ContosoTraders.com </b><br/>
                            You accept ContosoTraders.com “as-is” and choose to use it at your own risk. Despite the prohibitions below, ContosoTraders may contain inaccurate, inappropriate or possibly offensive material, and we assume no responsibility or liability for such material. <br/><br/>

                        
                        <b>Abusing ContosoTraders.com</b><br/>
                         We may limit or terminate our service, remove hosted content and take technical and legal steps to keep users off ebayinc.com if we think they are creating problems or acting inconsistently with the letter or spirit of our policies. Please report problems, offensive content and policy violations by emailing us at support@contosotraders.com <br/><br/>

                        
                        <b>Liability</b><br/>
                            To the extent legally permitted we expressly disclaim all warranties, representations and conditions, express or implied, including those of quality, merchantability, merchantable quality, durability, fitness for a particular purpose and those arising by statute. We are not liable for any loss, whether of money (including profit), goodwill, or reputation, or any special, indirect, or consequential damages arising out of your use of ebayinc.com even if you advise us or we could reasonably foresee the possibility of any such damage occurring. Some jurisdictions do not allow the disclaimer of warranties or exclusion of damages, so such disclaimers and exclusions may not apply to you. Despite the previous paragraph, if we are found to be liable, our liability to you or any third party (whether in contract, tort, negligence, strict liability in tort, by statute or otherwise) is limited to fifty US dollars ($50).<br/><br/>

                        
                        <b>Indemnity</b><br/>
                            You will indemnify and hold us (and our officers, directors, agents, subsidiaries, joint ventures, and employees) harmless from any claim or demand, including reasonable attorneys’ fees, made by any third party due to or arising out of your breach of this Agreement, or your violation of any law or the rights of a third party.<br/><br/>

                        
                        <b>Personal Information</b><br/>
                            By using ContosoTraders.com, you agree to the collection, transfer, storage and use of your personal information by contosotraders Inc., as further described in our privacy policy. <br/><br/>
                        
                        <b>General</b><br/>
                            These terms and the other policies posted on ContosoTraders.com constitute the entire agreement between ebayinc.com and you, superseding any conflicting parts of any prior agreements. This agreement is governed by the laws of the State of California as they apply to agreements entered into and to be performed entirely within California between California residents, without regard to conflict of law provisions. You agree that any claim or dispute you may have against eBay must be resolved by a court located in Santa Clara County, California. If we don’t enforce any particular provision, we are not waiving our right to do so later. If a court strikes any of these terms, the remaining terms will survive. We may automatically assign this agreement in our sole discretion in accordance with the notice provision below. Except for reporting policy violations and intellectual property infringements, any legal notices from you to us shall be served on ContosoTraders national registered agent. We will send notices to you via the email address that you provide, or by registered mail to the address you provide. Notices sent by registered mail will be deemed received five days following the date of mailing. We may update these terms at any time, with updates taking effect 30 days after they are initially posted on the Site. No other amendment to these terms will be effective unless made in writing, signed by users and by us.<br/><br/>
                        
                        
                    </p>
                </div>
            </div>
            <hr/>
        </>
     );
}

export default TermsOfService;