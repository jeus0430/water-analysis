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
                                <a-checkbox v-model="zoneChecked">
                                    Select All
                                </a-checkbox>
                                <a-select
                                    mode="multiple"
                                    placeholder="Select zones"
                                    @change="handleZoneChange"
                                    :disabled="zoneChecked"
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
                                <a-checkbox v-model="groupChecked">
                                    Select All
                                </a-checkbox>
                                <a-select
                                    mode="multiple"
                                    placeholder="Select group"
                                    @change="handleGroupChange"
                                    :disabled="groupChecked"
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
                                <a-checkbox v-model="moneavChecked">
                                    Select All
                                </a-checkbox>
                                <a-select
                                    mode="multiple"
                                    placeholder="Select Mone_av"
                                    @change="handleMoneavChange"
                                    :disabled="moneavChecked"
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
                                <a-radio-group
                                    name="xaxis"
                                    :value="selectedX"
                                    ref="xs"
                                    :options="xOptions"
                                    @change="handleXAxisChange"
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
            zoneChecked: true,
            selectedZones: [],
            zones: [],
            groups: [],
            groupChecked: true,
            selectedGroups: [],
            selectedMoneavs: [],
            moneavChecked: true,
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
            selectedX: "date",
            sum: "daily",
            sumOptions: ["daily", "weekly", "monthly", "yearly"],
            graphType: "area",
            graphOptions: ["pie", "line", "bar", "area"],
            dateChecked: true,
            chartOptions: {
                chart: {
                    id: "vuechart-example",
                    type: "area",
                    zoom: {
                        type: "x",
                        enabled: true
                    }
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
            let toCheck = []
            if (!this.zoneChecked) toCheck.push("selectedZones")
            if (!this.groupChecked) toCheck.push("selectedGroups")
            if (!this.moneavChecked) toCheck.push("selectedMoneavs")
            toCheck.push("dateRange")
            this.form.validateFields(toCheck, (err, values) => {
                if (!err) {
                    console.log("Received values of form: ", values)
                    this.updateChart()
                }
            })
            e.preventDefault()
        },
        handleZoneCheck(e) {
            if (e.target.checked) {
            } else {
            }
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
            this.dateRange = dateString
        },
        handleDeltaChange(value) {
            console.log(this.delta)
        },
        handlePerCentChange(value) {},
        handleXAxisChange(e) {
            this.selectedX = e.target.value
            if (e.target.value == "date") this.dateChecked = true
            else this.dateChecked = false
        },
        handleSumChange(value) {},
        handleGraphChange(value) {},
        updateChart() {
            let zones = this.selectedZones
            if (this.zoneChecked) zones = []

            let groups = this.selectedGroups
            if (this.groupChecked) groups = this.selectedGroups

            let moneavs = this.selectedMoneavs
            if (this.moneavChecked) moneavs = this.selectedMoneavs

            let dateRange = this.dateRange
            let delta = this.delta
            let per_cent = this.per_cent
            let xaxis = this.selectedX
            let sum = this.sum
            let graphType = this.graphType

            axios
                .post("/api/chart", {
                    zones: zones,
                    groups: groups,
                    moneavs: moneavs,
                    dateRange: dateRange,
                    delta: delta,
                    per_cent: per_cent,
                    xaxis: xaxis,
                    sum: sum,
                    graphType: graphType
                })
                .then(res => {
                    console.log(res)
                })

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
        this.$refs.xs.value = "date"
        axios.get("/api/zones").then(res => {
            let data = res.data
            this.zones = data
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
