<template>
  <div>
    <form action="https://formspree.io/f/mrgwkzjn" method="POST">
      <div class="form" name="form">
        <input
          type="text"
          class="form-control"
          autocomplete="off"
          placeholder="First name"
          name="First name"
          required
          oninvalid="this.setCustomValidity('Whats your Name!')"
          oninput="setCustomValidity('')"
        />
  
        <input
          type="text"
          class="form-control"
          autocomplete="off"
          placeholder="Last name"
          name="Last name"
          required
          oninvalid="this.setCustomValidity('I need a Surname!')"
          oninput="setCustomValidity('')"
        />
  
        <input
          type="email"
          class="form-control"
          placeholder="Email:"
          autocomplete="off"
          name="email"
          required
          oninvalid="this.setCustomValidity('Email is required as Usual!')"
          oninput="setCustomValidity('')"
        />
  
        <textarea
          type="text"
          class="form-control"
          placeholder="Message:"
          name="message"
          autocomplete="off"
          required
          oninvalid="this.setCustomValidity('Dont you want to say anything!')"
          oninput="setCustomValidity('')"
        ></textarea>
  
        <button class="btn btn-outline-warning" style="margin-top: 20px" type="submit">SUBMIT</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped></style>
