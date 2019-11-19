<template>
  <section class="AppAuth">
    <h1 class="AuthTitle">
      {{ isSignup ? "Sign up" : "Log in" }}
    </h1>

    <form class="AuthForm" @submit.prevent="submit">
      <input
        v-model="username"
        type="text"
        class="AuthForm-input"
        placeholder="User"
      />

      <input
        v-model="password"
        type="password"
        class="AuthForm-input"
        placeholder="Password"
      />

      <input
        v-if="isSignup"
        v-model="passwordConfirmation"
        type="password"
        class="AuthForm-input"
        placeholder="Confirm password"
      />

      <footer class="AuthFooter">
        <router-link
          v-if="!isSignup"
          :to="{ name: 'signup' }"
          class="AuthForm-link"
        >
          Sign Up
        </router-link>

        <button
          type="submit"
          class="AuthForm-submit"
          :class="{ 'is-submitting': isLoading }"
        >
          <span v-if="!isLoading">{{ isSignup ? "Sign up" : "Go" }}</span>
          <span v-else>...</span>
        </button>
      </footer>
    </form>
  </section>
</template>

<script>
import loading from "@/mixins/loading";
export default {
  name: "Auth",

  mixins: [loading],

  data() {
    return {
      username: "",
      password: "",
      passwordConfirmation: ""
    };
  },

  computed: {
    isSignup() {
      return this.$route.name === "signup";
    }
  },

  created() {
    if (this.$store.state.user) {
      this.$router.push({ name: "main" });
    }
  },

  methods: {
    async submit() {
      this.formControl.start();
      if (this.isSignup) {
        await this.$store.dispatch("signup", {
          username: this.username,
          password: this.password,
          passwordConfirmation: this.passwordConfirmation
        });
      } else {
        await this.$store.dispatch("login", {
          username: this.username,
          password: this.password
        });

        this.formControl.done();
      }
      this.$router.push({ name: "main" });
    }
  }
};
</script>

<style>
.AppAuth {
  width: 100%;
  height: 100%;
  background-color: var(--Primary-color);
}

.AuthTitle {
  margin: 0;
  padding: 30px;
  text-align: center;
  color: var(--Secondary-color);
  font-size: 3rem;
}

.AuthForm {
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.AuthForm-input {
  padding: 12px;
  border-radius: 5px;
  border: 2px solid transparent;
  background-color: rgba(255, 255, 255, 0.75);
  margin-bottom: 15px;
  color: var(--Primary-color);
  font-size: 0.85rem;
}

.AuthForm-input:focus {
  color: var(--Secondary-color);
  border-color: var(--Secondary-color);
  background-color: transparent;
}

.AuthForm-input::placeholder {
  color: var(--Primary-color);
}

.AuthFooter {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  text-align: center;
}

.AuthForm-link,
.AuthForm-submit {
  width: 100%;
}

.AuthForm-link {
  color: var(--Secondary-color);
  text-decoration: none;
  padding: 8px;
}

.AuthForm-link:active {
  color: rgba(255, 255, 255, 0.75);
}

.AuthForm-submit {
  font-size: 1rem;
  padding: 12px;
  border: none;
  border-radius: 5px;
  background-color: var(--Secondary-color);
  color: var(--Primary-color);
  transition: width 0.3s ease;
}

.AuthForm-submit.is-submitting {
  width: 25%;
}

.AuthForm-submit:active {
  background-color: rgba(255, 255, 255, 0.75);
}
</style>
