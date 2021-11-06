<template>
    <a-config-provider :locale="locale">
        <div id="components-layout-demo-basic">
            <a-layout>
                <a-layout-header>
                    <h1>Water Differences Analytics</h1>
                </a-layout-header>
                <a-layout>
                    <a-layout-sider width="400">
                        <a-form
                            label="Search Form"
                            :form="form"
                            @submit="handleSubmit"
                        >
                            <a-form-item label="Waste Zone:">
                                <a-select
                                    mode="multiple"
                                    placeholder="Select zones"
                                    @change="handleZoneChange"
                                    v-decorator="[
                                        'selectedZones',
                                        {
                                            rules: [
                                                {
                                                    required: true,
                                                    message:
                                                        'Please select waste zones!'
                                                }
                                            ]
                                        }
                                    ]"
                                >
                                    <a-select-option
                                        v-for="zone in zones"
                                        :key="zone.waste_zone"
                                    >
                                        {{ zone.waste_description }}
                                    </a-select-option>
                                </a-select>
                            </a-form-item>
                            <a-form-item label="Belongs To:">
                                <a-select
                                    mode="multiple"
                                    placeholder="Select group"
                                    @change="handleGroupChange"
                                    v-decorator="[
                                        'selectedGroups',
                                        {
                                            rules: [
                                                {
                                                    required: true,
                                                    message:
                                                        'Please select groups!'
                                                }
                                            ]
                                        }
                                    ]"
                                >
                                    <a-select-option
                                        v-for="group in groups"
                                        :key="group.waste_group"
                                    >
                                        {{ group.waste_description }}
                                    </a-select-option>
                                </a-select>
                            </a-form-item>
                            <a-form-item label="Mone_av:">
                                <a-select
                                    mode="multiple"
                                    placeholder="Select Mone_av"
                                    @change="handleMoneavChange"
                                    v-decorator="[
                                        'selectedMoneavs',
                                        {
                                            rules: [
                                                {
                                                    required: true,
                                                    message:
                                                        'Please select move_avs!'
                                                }
                                            ]
                                        }
                                    ]"
                                >
                                    <a-select-option
                                        v-for="mone_av in mone_avs"
                                        :key="mone_av.mone_av"
                                    >
                                        {{ mone_av.mone_av }}
                                    </a-select-option>
                                </a-select>
                            </a-form-item>
                            <a-form-item label="Date Range:">
                                <a-range-picker
                                    @change="handleDateRangeChange"
                                    v-decorator="[
                                        'dateRange',
                                        {
                                            rules: [
                                                {
                                                    required: true,
                                                    message:
                                                        'Please select date range!'
                                                }
                                            ]
                                        }
                                    ]"
                                />
                            </a-form-item>
                            <a-form-item label="delta:">
                                <a-slider
                                    range
                                    :default-value="[delta_min, delta_max]"
                                    :min="delta_min"
                                    :max="delta_max"
                                    :step="0.0001"
                                    v-model="delta"
                                    @afterChange="handleDeltaChange"
                                />
                            </a-form-item>
                            <a-form-item label="per_cent:">
                                <a-slider
                                    range
                                    :default-value="[
                                        per_cent_min,
                                        per_cent_max
                                    ]"
                                    :min="per_cent_min"
                                    :max="per_cent_max"
                                    v-model="per_cent"
                                    @afterChange="handlePerCentChange"
                                />
                            </a-form-item>
                            <a-form-item label="X-axis:">
                                <a-checkbox-group
                                    name="xaxis"
                                    :options="xOptions"
                                    @change="handleXAxisChange"
                                    v-decorator="[
                                        'selectedX',
                                        { rules: [{ required: true }] }
                                    ]"
                                />
                            </a-form-item>
                            <a-form-item label="Sum:" v-if="dateChecked">
                                <a-radio-group
                                    v-model="sum"
                                    :options="sumOptions"
                                    @change="handleSumChange"
                                />
                            </a-form-item>
                            <a-form-item label="Graph:">
                                <a-radio-group
                                    name="graph"
                                    v-model="graphType"
                                    :options="graphOptions"
                                    @change="handleGraphChange"
                                />
                            </a-form-item>
                            <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
                                <a-button type="primary" html-type="submit">
                                    Draw
                                </a-button>
                            </a-form-item>
                        </a-form>
                    </a-layout-sider>
                    <a-layout-content>
                        <apexchart
                            type="bar"
                            :options="chartOptions"
                            :series="series"
                        ></apexchart>
                    </a-layout-content>
                </a-layout>
            </a-layout>
        </div>
    </a-config-provider>
</template>

<script>
import axios from "axios"
import moment from "moment"
import heIL from "ant-design-vue/lib/locale-provider/he_IL"
import VueApexCharts from "vue-apexcharts"

export default {
    data() {
        return {
            locale: heIL,
            form: this.$form.createForm(this, { name: "coordinated" }),
            data: [],
            selectedZones: [],
            zones: [],
            groups: [],
            selectedGroups: [],
            selectedMoneavs: [],
            mone_avs: [],
            fetching: false,
            dateRange: [],
            delta_min: 0,
            delta_max: 0,
            delta: [0, 0],
            per_cent_min: 0,
            per_cent_max: 0,
            per_cent: [0, 0],
            xOptions: ["date", "ezor", "group", "mone_av"],
            selectedX: ["date"],
            sum: "daily",
            sumOptions: ["daily", "weekly", "monthly", "yearly"],
            graphType: "area",
            graphOptions: ["pie", "line", "bar", "area"],
            dateChecked: true,
            chartOptions: {
                chart: {
                    id: "vuechart-example"
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                }
            },
            series: [
                {
                    name: "Vue Chart",
                    data: [30, 40, 45, 50, 49, 60, 70, 81]
                }
            ]
        }
    },
    methods: {
        moment,
        handleSubmit(e) {
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log("Received values of form: ", values)
                }
            })
            console.log(this.selectedZones)
            e.preventDefault()
        },
        handleZoneChange(value) {
            this.selectedZones = value
        },
        handleGroupChange(value) {
            this.selectedGroups = value
        },
        handleMoneavChange(value) {
            this.selectedMoneavs = value
        },
        handleDateRangeChange(date, dateString) {
            this.dateRange = date
        },
        handleDeltaChange(value) {
            console.log(this.delta)
        },
        handlePerCentChange(value) {
            console.log(this.per_cent)
            console.log(this.selectedX)
        },
        handleXAxisChange(checkedValues) {
            this.selectedX = checkedValues
            if (typeof checkedValues.find(e => e == "date") == "undefined")
                this.dateChecked = false
            else this.dateChecked = true
        },
        handleSumChange(value) {},
        handleGraphChange(value) {},
        updateChart() {
            const max = 90
            const min = 20
            const newData = this.series[0].data.map(() => {
                return Math.floor(Math.random() * (max - min + 1)) + min
            })
            // In the same way, update the series option
            this.series = [
                {
                    data: newData
                }
            ]
        }
    },
    mounted: function() {
        this.form.setFieldsValue({
            selectedX: ["date"]
        })
        axios.get("/api/zones").then(res => {
            this.zones = res.data
        })
        axios.get("/api/groups").then(res => {
            this.groups = res.data
        })
        axios.get("/api/mone_avs").then(res => {
            this.mone_avs = res.data
        })
        axios.get("/api/delta_range").then(res => {
            this.delta_min = parseFloat(res.data.min)
            this.delta_max = parseFloat(res.data.max)
        })
        axios.get("/api/per_cent_range").then(res => {
            this.per_cent_min = parseFloat(res.data.min)
            this.per_cent_max = parseFloat(res.data.max)
        })
    }
}
</script>
