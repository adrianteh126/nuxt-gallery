<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="createPostModal"
    tabindex="-1"
    aria-labelledby="createPostModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered text-light">
      <div class="modal-content bg-dark border-secondary">
        <div class="modal-header border-secondary" data-bs-theme="dark">
          <h1 class="modal-title fs-5" id="createPostModalLabel">
            Create New Post 🖼
          </h1>
        </div>
        <div class="modal-body d-flex gap-3">
          <div
            class="d-flex flex-column align-items-start justify-content-center w-50"
          >
            <div class="mb-2">
              <label
                for="formFile"
                class="form-label"
                type="file"
                id="imageInput"
                >Upload your image :</label
              >
              <input
                class="form-control"
                type="file"
                accept="image/*"
                id="formFile"
                @change="handleFileChange"
              />
            </div>
            <label for="captionTxt" class="form-label">Caption : </label>
            <input
              type="text"
              class="form-control"
              id="captionTxt"
              placeholder="Your caption here"
              maxlength="24"
              v-model="formData.captionText"
            />
          </div>
          <div class="w-50">
            <img
              class="rounded d-block img-fluid m-auto"
              :src="formData.selectedFile"
            />
          </div>
        </div>
        <p class="ps-3 text-danger fw-bold">{{ errorMessage }}</p>
        <div class="modal-footer border-secondary">
          <button type="button" class="create-post-btn btn" @click="createPost">
            Create
          </button>
        </div>
      </div>
    </div>
    <!-- Loading Backdrop -->
    <LoadingBackdrop ref="loadingBackdrop" />
  </div>
  <!-- Toast -->
  <Toast ref="toast" />
</template>
<script>
import { Modal, Popover } from 'bootstrap'

export default {
  data() {
    const createPostModal = ref(null)
    const charLimitPopover = ref(null)
    const formData = {
      captionText: ref(''),
      selectedFile: ref(
        'https://cdn-icons-png.flaticon.com/128/4671/4671171.png'
      ),
      uploadImg: ref(null)
    }
    const errorMessage = ref('')
    return {
      createPostModal,
      charLimitPopover,
      formData,
      errorMessage
    }
  },
  mounted() {
    this.createPostModal = new Modal('#createPostModal')
    this.charLimitPopover = new Popover('#captionTxt', {
      content: 'Max character : 23',
      offset: [0, 10],
      placement: 'bottom',
      trigger: 'manual'
    })
  },
  methods: {
    // modal related
    showModal() {
      this.createPostModal.show()
    },
    hideModal() {
      this.createPostModal.hide()
    },
    closeModal() {
      //TODO : erase input data when modal is closed
      this.createPostModal.hide()
    },
    // TODO: using promise, ensure the toggle once when clicked multiple time
    triggedPopover() {
      this.charLimitPopover.show()
      setTimeout(() => {
        this.charLimitPopover.hide()
      }, 1500)
    },
    toggleLoadingBackdrop() {
      this.$refs.loadingBackdrop.toggleLoadingBackdrop()
    },

    // handlers related
    handleFileChange(event) {
      const selectedFile = event.target.files[0]

      if (!selectedFile) {
        console.error(
          'handleFileChange() : Failed to select file using File API.'
        )
        return
      }
      if (event.target.files.length > 1) {
        console.error(
          'handleFileChange() : Only one file can be selected at a time.'
        )
        return
      }

      this.formData.uploadImg = selectedFile
      this.formData.selectedFile = selectedFile

      if (selectedFile.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onload = () => {
          this.formData.selectedFile = reader.result
        }
        reader.readAsDataURL(selectedFile)
      } else {
        console.error(
          'handleFileChange() : Selected file type is not supported.'
        )
      }
    },
    async createPost() {
      // validation : user not complete form
      if (!this.formData.captionText || !this.formData.uploadImg) {
        const errorMessage = "Didn't have caption or select image!"
        this.errorMessage = errorMessage
        return
      }

      // validation : user not uploading image type file
      if (!this.formData.uploadImg.type.startsWith('image/')) {
        const errorMessage = 'The upload file is not an image!'
        this.errorMessage = errorMessage
        return
      }

      this.toggleLoadingBackdrop()
      if (this.formData.captionText && this.formData.uploadImg) {
        try {
          const fileData = new FormData()
          fileData.append('file', this.formData.uploadImg)
          fileData.append('userId', 'bxyH2D3P6rEPTgSxdz49') // TODO :should upload based on current userId
          const imgUrl = await $fetch('/api/uploadImage', {
            method: 'POST',
            body: fileData
          }).then((res) => res.result)

          const res = await $fetch('/api/create', {
            method: 'POST',
            body: {
              caption: this.formData.captionText,
              imgUrl: imgUrl,
              userId: 'bxyH2D3P6rEPTgSxdz49'
            }
          })

          if (res.error) this.errorMessage = res.error

          setTimeout(() => {
            this.toggleLoadingBackdrop()
          }, 500)
          this.closeModal()
          this.clearForm()

          this.$refs.toast.showToast('Create post successfully!')

          // TODO : fix this hard-coded part to refresh post lists
          await navigateTo('/bookmark')
          await navigateTo('/')
        } catch (error) {
          setTimeout(() => {
            this.toggleLoadingBackdrop()
          }, 500)
          console.error('Failed to create post: ', error)
        }
      } else
        console.error("createPost() : Didn't have caption or select image!")
    },

    // utils related
    clearForm() {
      this.formData = {
        captionText: ref(''),
        selectedFile: ref(
          'https://cdn-icons-png.flaticon.com/128/4671/4671171.png'
        ),
        uploadImg: ref(null)
      }
    }
  },
  watch: {
    'formData.captionText'(newInput, lastInput) {
      if (newInput.length > 23) {
        this.triggedPopover()
        this.formData.captionText = this.formData.captionText.slice(0, -1)
      }
    }
  }
}
</script>

<style>
.create-post-btn {
  background-color: var(--yellow-color);
}

.create-post-btn:hover {
  color: var(--dark-color2);
  background-color: var(--yellow-color2);
}
</style>
