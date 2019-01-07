<template>
  <b-row class="contact-us-component text-white">
    <b-col cols="12" sm="6" md="5">
      <b-form @submit="onSubmit">
        <b-form-group id="nameInputGroup">
          <b-form-input id="nameInput"
                        type="text"
                        v-model="form.name"
                        required
                        placeholder="الاسم"
                        title="الاسم"
                        >
          </b-form-input>
        </b-form-group>
        <b-form-group id="surnameInputGroup">
          <b-form-input id="surnameInput"
                        type="text"
                        v-model="form.surname"
                        required
                        placeholder="الشهرة"
                        title="الشهرة">
          </b-form-input>
        </b-form-group>
        <b-form-group id="emailInputGroup">
          <b-form-input id="emailInput"
                        type="email"
                        v-model="form.email"
                        required
                        placeholder="البريد الالكتروني"
                        title="البريد الالكتروني">
          </b-form-input>
        </b-form-group>
        <b-form-group id="messageInputGroup">
          <b-form-textarea id="messageInput"
                           v-model="form.message"
                           placeholder="الرسالة"
                           title="الرسالة"
                           :rows="4"
                           :max-rows="4"
                           no-resize=false>
          </b-form-textarea>
        </b-form-group>

        <b-button type="submit" variant="primary" title="ارسال">ارسال</b-button>
      </b-form>
    </b-col>

    <b-col cols="12" sm="6" md="4" offset-md="3">
      <p title="الهاتف">
        <span>الهاتف</span>
        <span dir="ltr">+971 55555555</span>
      </p>
      <p title="الفاكس">
        <span>الفاكس</span>
        <span dir="ltr">+971 555555555</span>
      </p>
      <p title="البريد الالكتروني">
        <span>البريد الالكتروني</span>
        <span dir="ltr">Pada.gov.kw</span>
      </p>
      <ul class="share_links list-inline my-5 pb-3" title="Social Links">
        <li class="list-inline-item">
          <a href="#" title="Facebook Link">
            <span class="icon-facebook"></span>
          </a>
        </li>
        <li class="list-inline-item">
          <a href="#" title="Twitter">
            <span class="icon-twitter"></span>
          </a>
        </li>
        <li class="list-inline-item">
          <a href="#" title="Linkedin Link">
            <span class="icon-linkedin"></span>
          </a>
        </li>
      </ul>
      <p><a href="#" title="شروط الاستخدام">شروط الاستخدام</a></p>
      <p><a href="#" title="ائحة الخصوصية">ائحة الخصوصية</a></p>
    </b-col>
  </b-row>
</template>
<script src="./contactUsComponent.component.js"></script>
<style src="./contactUsComponent.component.scss" scoped lang="scss"></style>

