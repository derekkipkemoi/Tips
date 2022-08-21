import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="home">
      <div id="section3">
        <a id="contact" class="js--wp-3" name="contact"></a>
        <div class="row">
          <div class="form-wrapper">
            <h1 class="contact-title">Contact</h1>
            <div class="form-inner-wrapper">
              <form
                id="contactForm"
                method="post"
              >
                <div class="field-list clear">
                  <div id="name" class="form-item field email required">
                    <label class="title" for="name">
                      Name <span class="required">*</span>
                    </label>
                    <input
                      class="field-element"
                      name="name"
                      x-autocompletetype="name"
                      type="text"
                      spellcheck="false"
                    />
                  </div>

                  <div id="email" class="form-item field email required">
                    <label class="title" for="email">
                      Email Address <span class="required">*</span>
                    </label>
                    <input
                      class="field-element"
                      name="email"
                      x-autocompletetype="email"
                      type="text"
                      id="email-field"
                    />
                  </div>
                  <div id="textarea" class="form-item field textarea required">
                    <label class="title" for="textarea-field">
                      Message <span class="required">*</span>
                    </label>
                    <textarea
                      class="field-element"
                      id="textarea--field"
                      name="message"
                    ></textarea>
                  </div>
                  <div id="contactResponse"></div>
                  <div class="form-button-wrapper form-button-wrapper--align-center">
                    <input
                      class="button"
                      type="submit"
                      name="submit"
                      value="Submit"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
