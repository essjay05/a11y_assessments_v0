import './Styles.css';
import './Utils.js';

export const DialogPage = () => { 
  return (
    <>
      <main>
        <h1>Plain HTML, CSS, JavaScript Dialog Demo</h1>
        <p>Original demo sample is from <a href="https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/" target="_blank">W3.org Dialog Example</a></p>
        <div>
          <h2>Aria-label Dialog Example</h2>
          <button type="button" onclick="openDialog('arialabelDialog1', this)">Add Delivery Address</button>
          <div id="dialog_layer" class="dialogs">
            <div role="dialog" id="arialabelDialog1" aria-label="Add Delivery Address Dialog: Aria-Label Example" aria-modal="true" class="hidden">
              <h3 id="dialog1_label" class="dialog_label">Aria-label: Add Delivery Address</h3>
              <div class="dialog_form">
                <div class="dialog_form_item">
                  <label>
                    <span class="label_text">Street:</span>
                    <input type="text" class="wide_input"/>
                  </label>
                </div>
                <div class="dialog_form_item">
                  <label>
                    <span class="label_text">City:</span>
                    <input type="text" class="city_input"/>
                  </label>
                </div>
                <div class="dialog_form_item">
                  <label>
                    <span class="label_text">State:</span>
                    <input type="text" class="state_input"/>
                  </label>
                </div>
                <div class="dialog_form_item">
                  <label>
                    <span class="label_text">Zip:</span>
                    <input type="text" class="zip_input"/>
                  </label>
                </div>

                <div class="dialog_form_item">
                  <label for="special_instructions">
                    <span class="label_text">Special instructions:</span>
                  </label>
                  <input id="special_instructions" type="text" aria-describedby="special_instructions_desc" class="wide_input"/>
                  <div class="label_info" id="special_instructions_desc">For example, gate code or other information to help the driver find you</div>
                </div>
              </div>
              <div class="dialog_form_actions">
                <button type="button" onclick="openDialog('dialog2', this, 'dialog2_para1')">Verify Address</button>
                <button type="button" onclick="replaceDialog('dialog3', undefined, 'dialog3_close_btn')">Add</button>
                <button type="button" onclick="closeDialog(this)">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
};

export default DialogPage;