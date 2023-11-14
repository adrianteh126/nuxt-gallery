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
              v-model="captionText"
            />
          </div>
          <div class="w-50">
            <img class="rounded d-block img-fluid m-auto" :src="selectedFile" />
          </div>
        </div>
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
    const captionText = ref('')
    const selectedFile = ref(
      'https://cdn-icons-png.flaticon.com/128/4671/4671171.png'
    )
    const uploadImg = ref(null)
    return {
      createPostModal,
      charLimitPopover,
      captionText,
      selectedFile,
      uploadImg
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

      this.uploadImg = selectedFile
      this.selectedFile = selectedFile

      if (selectedFile.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onload = () => {
          this.selectedFile = reader.result
        }
        reader.readAsDataURL(selectedFile)
      } else {
        console.error(
          'handleFileChange() : Selected file type is not supported.'
        )
      }
    },

    async createPost() {
      // TODO : validation for adding caption and select img before upload
      if (this.captionText && this.uploadImg) {
        try {
          this.toggleLoadingBackdrop()

          const formData = new FormData()
          formData.append('file', this.uploadImg)
          formData.append('userId', 'bxyH2D3P6rEPTgSxdz49') // TODO :should upload based on current userId
          const imgUrl = await $fetch('/api/uploadImage', {
            method: 'POST',
            body: formData
          }).then((res) => res.result)
          const res = await $fetch('/api/create', {
            method: 'POST',
            body: {
              caption: this.captionText,
              imgUrl: imgUrl,
              userId: 'bxyH2D3P6rEPTgSxdz49'
            }
          })

          this.toggleLoadingBackdrop()
          this.closeModal()
          this.$refs.toast.showToast('Create post successfully!')
        } catch (error) {
          this.toggleLoadingBackdrop()
          console.error('Failed to create post: ', error)
        }
      } else
        console.error("createPost() : Didn't have caption or select image!")
    },

    async uploadImage() {
      // logic here - call api
    }
  },
  watch: {
    captionText(newInput, lastInput) {
      if (newInput.length > 23) {
        this.triggedPopover()
        this.captionText = this.captionText.slice(0, -1)
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
