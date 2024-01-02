<template>
  <a-card title="Danh sách bài viết" class="w-100">
    <div class="row mb-3">
      <div class="col-12 d-flex justify-content-end">
        <a-button type="primary" @click="showDrawer">
          <PlusOutlined />
        </a-button>
      </div>
    </div>
    <div class="row">
      <div class="col-12 table-responsive">
        <a-table v-if="isShowTable" :dataSource="posts" :columns="columns" class="table">
          <template #headerCell="{ column }">
            <template v-if="column.key === 'username'">
              <a-row>
                <a-col :span="22">
                  Tài khoản
                </a-col>
                <a-col :span="2">
                  <SearchOutlined :style="{ fontSize: '12px' }" class="text-black-50" />
                </a-col>
              </a-row>
            </template>
          </template>
          <template #bodyCell="{ column, index, record }">
            <template v-if="column.key === 'priority'">
              <span v-if="record.priority === 1">
                <a-tag color="#87d068">Ưu tiên</a-tag>
              </span>
              <span v-if="record.priority === 0">
                <a-tag color="#cd201f">Không ưu tiên</a-tag>
              </span>
            </template>
            <template v-if="column.key === 'status'">
              <span v-if="record.status === 1">
                <a-tag color="#87d068">Hoạt động</a-tag>
              </span>
              <span v-if="record.status === 0">
                <a-tag color="#cd201f">Đang tạm khóa</a-tag>
              </span>
            </template>
            <template v-if="column.key === 'action'">
              <a-space>
                <a-button type="primary">
                  <EditOutlined />
                </a-button>
                <a-button type="primary" danger>
                  <DeleteOutlined />
                </a-button>
              </a-space>
            </template>
          </template>
        </a-table>
      </div>
    </div>
  </a-card>

  <a-drawer title="Tạo bài viết" :width="720" :visible="drawerCreate" :body-style="{ paddingBottom: '80px' }"
    :footer-style="{ textAlign: 'right' }" @close="hideDrawer">
    <a-form layout="vertical">
      <a-row :gutter="16">
        <a-col :span="24">
          <a-form-item label="Tiêu đề" name="title">
            <a-textarea v-model:value="form.title" @input="onChangeTitle(form.title)" placeholder="Vui lòng nhập tiêu đề"
              auto-size />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="24">
          <a-form-item label="Slug" name="slug">
            <a-textarea readonly placeholder="Vui lòng nhập tiêu đề" v-model:value="form.slug" auto-size />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item label="Danh mục" name="category_id">
            <a-select v-model:value="form.category_id" placeholder="Vui lòng chọn danh mục">
              <a-select-option v-for="(item, index) in categories" :key="index" :value="item.id">{{ item.category
              }}</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="Ưu tiên" name="priority">
            <a-select v-model:value="form.priority" placeholder="Vui lòng chọn sự ưu tiên">
              <a-select-option :value="0">Không ưu tiên</a-select-option>
              <a-select-option :value="1">Ưu tiên</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="Trạng thái" name="status">
            <a-select v-model:value="form.status" placeholder="Vui lòng chọn trạng thái">
              <a-select-option :value="1">Active</a-select-option>
              <a-select-option :value="0">Inactive</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="16">
          <a-form-item label="Tag" name="tag_id">
            <a-select v-model:value="form['tag_id']" mode="multiple"
              placeholder="Please select favourite colors">
              <a-select-option v-for="(item, index) in tags" :key="index" :value="item.id">{{ item.tag }}</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="24">
          <a-form-item label="Nội dung" name="content">
            <a-space>
              <a-button @click="editor.chain().focus().toggleBold().run()" shape="circle">
                <BoldOutlined />
              </a-button>
              <a-button @click="editor.chain().focus().toggleItalic().run()" shape="circle">
                <ItalicOutlined />
              </a-button>
              <a-button @click="editor.chain().focus().toggleUnderline().run()" shape="circle">
                <UnderlineOutlined />
              </a-button>
              <a-button @click="editor.chain().focus().toggleStrike().run()" shape="circle">
                <StrikethroughOutlined />
              </a-button>
              <a-dropdown>
                <template #overlay>
                  <a-menu>
                    <a-menu-item key="1">
                      <AlignCenterOutlined />
                    </a-menu-item>
                    <a-menu-item key="2">
                      <AlignLeftOutlined />
                    </a-menu-item>
                    <a-menu-item key="3">
                      <AlignRightOutlined />
                    </a-menu-item>
                  </a-menu>
                </template>
                <a-button shape="circle">
                  <MenuOutlined />
                </a-button>
              </a-dropdown>
              <a-dropdown>
                <template #overlay>
                  <a-menu>
                    <a-menu-item @click="editor.chain().focus().setHeading({ level: 1 }).run()" key="1">
                      H1
                    </a-menu-item>
                    <a-menu-item @click="editor.chain().focus().setHeading({ level: 2 }).run()" key="2">
                      H2
                    </a-menu-item>
                    <a-menu-item @click="editor.chain().focus().setHeading({ level: 3 }).run()" key="3">
                      H3
                    </a-menu-item>
                    <a-menu-item @click="editor.chain().focus().setHeading({ level: 4 }).run()" key="3">
                      H4
                    </a-menu-item>
                    <a-menu-item @click="editor.chain().focus().setHeading({ level: 5 }).run()" key="3">
                      H5
                    </a-menu-item>
                  </a-menu>
                </template>
                <a-button shape="circle">
                  <FontSizeOutlined />
                </a-button>
              </a-dropdown>
              <a-button @click="insertImage" shape="circle">
                <FileImageOutlined />
              </a-button>
            </a-space>
            <editor-content :editor="editor" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="24">
          <a-form-item label="Nội dung ngắn" name="summary">
            <a-textarea v-model:value="form.summary" placeholder="Vui lòng nhập nội dung ngắn"
              :auto-size="{ minRows: 2, maxRows: 5 }" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <template #extra>
      <a-space>
        <a-button @click="hideDrawer">Trở về</a-button>
        <a-button type="primary" @click="addPost">Lưu</a-button>
      </a-space>
    </template>
  </a-drawer>
</template>

<script>
import { createSlug } from '~/helpers/commonHelper.js'
import categoryService from '~/service/categoryService.js'
import tagService from '~/service/tagService.js'
import postService from '~/service/postService.js'
import { Editor, EditorContent } from "@tiptap/vue-3"
import StarterKit from "@tiptap/starter-kit"
import Image from "@tiptap/extension-image"
import Heading from "@tiptap/extension-heading"
import Bold from "@tiptap/extension-bold"
import Italic from "@tiptap/extension-italic"
import Underline from "@tiptap/extension-underline"
import TextAlign from "@tiptap/extension-text-align"
import Document from "@tiptap/extension-document"
import ListItem from "@tiptap/extension-list-item"
import Youtube from "@tiptap/extension-youtube"
import { SearchOutlined, EditOutlined, DeleteOutlined, BoldOutlined, ItalicOutlined, UnderlineOutlined, StrikethroughOutlined, MenuOutlined, AlignCenterOutlined, AlignLeftOutlined, AlignRightOutlined, FontSizeOutlined, PlusOutlined, FileImageOutlined } from '@ant-design/icons-vue'

export default {
  created() {
    this.getPostList()
  },
  components: {
    PlusOutlined,
    EditOutlined,
    DeleteOutlined,
    PlusOutlined,
    SearchOutlined,
    EditorContent,
    DeleteOutlined,
    BoldOutlined,
    ItalicOutlined,
    UnderlineOutlined,
    StrikethroughOutlined,
    MenuOutlined,
    AlignCenterOutlined,
    AlignLeftOutlined,
    AlignRightOutlined,
    FontSizeOutlined,
    FileImageOutlined,
  },
  data() {
    return {
      editor: null,
      drawerCreate: false,
      isShowTable: false,
      categories: [],
      tags: [],
      columns: [
        {
          title: 'Tiêu đề',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: 'Slug',
          dataIndex: 'slug',
          key: 'slug',
        },
        {
          title: 'Ưu tiên',
          dataIndex: 'priority',
          key: 'priority',
        },
        {
          title: 'Trạng thái',
          dataIndex: 'status',
          key: 'status',
        },
        {
          title: 'Ngày tạo',
          dataIndex: 'created_at',
          key: 'created_at',
        },
        {
          title: 'Hành động',
          key: 'action',
          fixed: 'right',
        }
      ],
      form: {
        title: null,
        slug: null,
        summary: null,
        category_id: null,
        priority: 0,
        status: 1
      },
      posts: []
    }
  },
  mounted() {
    this.editor = new Editor({
      content: "<p>I’m running Tiptap with Vue.js. 🎉</p>",
      extensions: [
        StarterKit,
        Image,
        Heading,
        Bold,
        Italic,
        Underline,
        TextAlign,
        Document,
        ListItem,
        Youtube
      ],
    });
  },

  beforeUnmount() {
    this.editor.destroy();
  },
  methods: {
    onChangeTitle(title) {
      this.form.slug = createSlug(title)
    },
    insertImage() {
      const imageUrl = "https://i.ytimg.com/vi/Yw9Ra2UiVLw/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARgcIC4ofzAP&rs=AOn4CLBanQQSVKAunZeljYhUF0sp2bxNOg"
      const imageNode = this.editor.chain().focus().setImage({ src: imageUrl }).run()
    },
    addPost() {
      let params = {
        title: this.form.title,
        slug: this.form.slug,
        content: this.editor.getHTML(),
        summary: this.form.summary,
        tag_id: this.form.tag_id,
        category_id: this.form.category_id,
        priority: this.form.priority,
        status: this.form.status
      }
      console.log(params);
      postService.addPost(params).then(response => {
        if (response.data.success) {
          this.$message.success(response.data.message)
        } else {
          this.$message.error(response.data.message)
        }
      })
        .catch(error => {
          this.$message.error(error.response.data.message)
        })
        .finally(() => {
          this.hideDrawer()
          this.getPostList()
        })
    },
    showDrawer() {
      this.drawerCreate = true
      tagService.getAll().then(response => {
        if (response.data.success) {
          this.tags = response.data.data
        }
      })
      .catch(error => {
          console.error(error)
      })
      categoryService.getStatusActive().then(response => {
        if (response.data.success) {
          this.categories = response.data.data
        }
      })
        .catch(error => {
          console.error(error)
        })
    },
    hideDrawer() {
      this.form = {
        title: null,
        slug: null,
        content: '',
        summary: null,
        category_id: null,
        priority: 0,
        status: 1
      }
      this.drawerCreate = false
    },
    getPostList() {
      postService.getAll().then(response => {
        if (response.data.success) {
          this.posts = response.data.data
        }
      })
        .catch(error => {
          console.error(error)
        })
        .finally(() => {
          this.isShowTable = true
        })
    }
  }
}
</script>