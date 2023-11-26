<template>
  <!-- TODO : add event handlers -->
  <!-- TODO : <input> edit value to trigger updateProfile() -->
  <div
    class="container-fluid d-flex justify-content-center align-items-center pt-5"
  >
    <div class="d-flex flex-column align-items-center gap-3">
      <div class="user-card">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <div class="card-body-header-username-id">
                <h5
                  v-if="!editDisplayName"
                  class="card-title d-inline-block"
                  @mouseover="showEditDisplayName = true"
                  @mouseout="showEditDisplayName = false"
                  @click="editDisplayName = !editDisplayName"
                  :class="{ 'hovered-display-name': showEditDisplayName }"
                >
                  {{ user?.displayName }}
                  <IconsIconEdit v-show="showEditDisplayName" />
                </h5>
                <h5 v-else>
                  <input
                    type="text"
                    class="border-0 fw-medium"
                    :value="user?.displayName"
                    :size="user?.displayName?.length"
                    maxlength="12"
                  />
                  <IconsIconEdit
                    v-show="showEditDisplayName"
                    @click="editDisplayName = !editDisplayName"
                  />
                </h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  🆔 {{ user?.uid }}
                </h6>
              </div>
              <div class="card-body-header-profile-picture">
                <div
                  v-if="user?.photoURL"
                  class="profile-picture-container me-1"
                  @click="handleChangeProfilePicture()"
                >
                  <IconsIconEdit
                    class="profile-picture-edit-icon-overlay"
                    width="1.25em"
                    height="1.25em"
                  />
                  <img
                    class="profile-picture"
                    :src="user?.photoURL"
                    alt="Your handsome face"
                  />
                </div>
                <IconsProfile v-else :width="54" :height="54" />
              </div>
            </div>
            <hr />
            <p class="card-text">
              📧 {{ user?.email }} <br />
              ⏰ {{ user?.metadata.lastSignInTime }} <br />
              🤳 {{ user?.photoURL ?? 'No Photo URL' }}
            </p>
            <br />
            <div class="card-footer-buttons d-flex justify-content-end gap-2">
              <button
                class="btn update-info-btn fw-medium"
                @click="handleChangePassword()"
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <Toast ref="toast" /> -->
</template>

<script lang="ts">
import type { User } from 'firebase/auth'
export default {
  data() {
    const user: Ref<User | null> = ref(null)
    const showEditDisplayName = false
    const editDisplayName = false
    return { user, showEditDisplayName, editDisplayName }
  },

  methods: {
    async handleChangePassword() {
      console.log('handleChangePassword')
    },
    async handleChangeProfilePicture() {
      console.log('handleChangeProfilePicture')
    },
    async handleUploadImage() {
      useFirebaseAuth.updateUser({
        newPhotoURL:
          'https://firebasestorage.googleapis.com/v0/b/nuxt-gallery-8a11d.appspot.com/o/images%2FbxyH2D3P6rEPTgSxdz49%2F2023-11-25T10%3A47%3A31.001Z?alt=media&token=e8ba724e-6844-42fc-932e-5b3848ae2e0f'
      })
    }
  },
  created() {
    this.user = useFirebaseAuth.auth.currentUser
  },
  mounted() {
    // this.handleUploadImage()
    // this.$refs.toast.showToast("testing.vue");
  }
}
</script>

<style lang="scss" scoped>
.hovered-display-name {
  /* Add your styles for the hovered state */
  background-color: #ffffff;
  cursor: text;
  /* Add any other styles you want to apply when hovered */
}

.update-info-btn {
  background-color: var(--yellow-color);
}
.update-info-btn:hover {
  color: var(--dark-color2);
  background-color: var(--yellow-color2);
}

.profile-picture-container {
  user-select: none;
  position: relative;

  .profile-picture {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    transition: filter 0.2s ease-in-out;
  }

  .profile-picture-edit-icon-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    z-index: 1;
    transition: opacity 0.2s ease-in-out;
  }
}
.profile-picture-container:hover {
  .profile-picture {
    filter: grayscale(100%);
  }

  .profile-picture-edit-icon-overlay {
    opacity: 1;
  }
}

.card {
  max-width: 500px;
}
</style>
