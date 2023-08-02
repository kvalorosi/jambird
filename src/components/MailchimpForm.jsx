import '../components/comp_css/chimp.css'

const MailchimpForm = () => {
    return (
      <div id="mc_embed_shell">
        <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
        <div id="mc_embed_signup">
          <form action="https://yahoo.us11.list-manage.com/subscribe/post?u=9dc2309eb61183021eb1c2cd4&amp;id=9b9ecc4698&amp;f_id=0017aae0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
            <div id="mc_embed_signup_scroll">
              <h2>Click subscribe below for the lastest happenings at Jam bird!</h2>
              <p className="brandingLogo" style={{ margin: '0px auto' }}><img src="images/color_noback Small.jpeg"  /></p>
              <div id="mce-responses" className="clear foot">
                <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
              </div>
              <br />
              <div className="optionalParent justify-content-center">
                <div className="clear_foot">
                  <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
                </div>
              </div>
            </div>
          </form>
        </div>
        <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `
          (function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';fnames[6]='MMERGE6';ftypes[6]='text';}(jQuery));
          var $mcj = jQuery.noConflict(true);
        ` }} />
      </div>
    );
  };
  
  export default MailchimpForm;
  


