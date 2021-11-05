<template>
    <div id="components-layout-demo-basic">
        <a-layout>
            <a-layout-header>
                <h1>Water Differences Analytics</h1>
            </a-layout-header>
            <a-layout>
                <a-layout-sider width="400" collapsible>
                    <a-form
                        :form="form"
                        :label-col="{ span: 5 }"
                        :wrapper-col="{ span: 15 }"
                        @submit="handleSubmit"
                    >
                        <a-form-item label="Note">
                            <a-select @change="handleChange">
                                <a-select-option
                                    v-for="zone in zones"
                                    :key="zone.id"
                                    value="zone.id"
                                >
                                    {{ zone.name }}
                                </a-select-option>
                            </a-select>
                        </a-form-item>
                        <a-form-item label="Gender">
                            <a-select
                                v-decorator="[
                                    'gender',
                                    {
                                        rules: [
                                            {
                                                required: true,
                                                message:
                                                    'Please select your gender!'
                                            }
                                        ]
                                    }
                                ]"
                                placeholder="Select a option and change input text above"
                                @change="handleSelectChange"
                            >
                                <a-select-option value="male">
                                    male
                                </a-select-option>
                                <a-select-option value="female">
                                    female
                                </a-select-option>
                            </a-select>
                        </a-form-item>
                        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
                            <a-button type="primary" html-type="submit">
                                Submit
                            </a-button>
                        </a-form-item>
                    </a-form>
                </a-layout-sider>
                <a-layout-content>Content</a-layout-content>
            </a-layout>
            <a-layout-footer>Footer</a-layout-footer>
        </a-layout>
        {{ message }}
    </div>
</template>
<style></style>
<script>
const default_layout = "default";

export default {
    computed: {},
    data() {
        return {
            message: "Hello World",
            formLayout: "horizontal",
            form: this.$form.createForm(this, { name: "coordinated" }),
            zones: []
        };
    },
    methods: {
        handleSubmit(e) {
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log("Received values of form: ", values);
                }
            });
            e.preventDefault();
        },
        handleSelectChange(value) {
            this.form.setFieldsValue({
                note: `Hi, ${value === "male" ? "man" : "lady"}!`
            });
        },
        handleChange(value) {
            console.log(`selected ${value}`);
        }
    }
};
</script>
