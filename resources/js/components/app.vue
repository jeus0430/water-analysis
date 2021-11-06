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
                                    :value="selectedZones"
                                    placeholder="Select zones"
                                    @change="handleZoneChange"
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
                                    :value="selectedGroups"
                                    placeholder="Select group"
                                    @change="handleGroupChange"
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
                                    :value="selectedMoneavs"
                                    placeholder="Select Mone_av"
                                    @change="handleMoneavChange"
                                >
                                    <a-select-option
                                        v-for="mone_av in mone_avs"
                                        :key="mone_av.mone_av"
                                    >
                                        {{ mone_av.mone_av }}
                                    </a-select-option>
                                </a-select>
                            </a-form-item>
                            <a-form-item label="Mone_av:">
                                <a-range-picker
                                    v-model="dateRange"
                                    @change="handleDateRangeChange"
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
                                    v-model="selectedX"
                                    :options="plainOptions"
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
                    <a-layout-content></a-layout-content>
                </a-layout>
            </a-layout>
        </div>
    </a-config-provider>
</template>

<script>
import axios from "axios"
import moment from "moment"
import heIL from "ant-design-vue/lib/locale-provider/he_IL"
export default {
    data() {
        return {
            locale: heIL,
            form: {},
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
            plainOptions: ["date", "ezor", "group", "mone_av"],
            selectedX: [],
            sum: [],
            sumOptions: ["daily", "weekly", "monthly", "yearly"],
            graphType: [],
            graphOptions: ["pie", "line", "bar", "area"],
            dateChecked: false,
            datacollection: {
                labels: [18, 28],
                datasets: [
                    {
                        label: "Data One",
                        backgroundColor: "#f87979",
                        data: [3, 4]
                    },
                    {
                        label: "Data Two",
                        backgroundColor: "#f87979",
                        data: [3, 23]
                    }
                ]
            }
        }
    },
    methods: {
        moment,
        handleSubmit(e) {
            e.preventDefault()
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log("Received values of form: ", values)
                }
            })
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
            console.log(this.dateRange)
        },
        handleDeltaChange(value) {
            console.log(this.delta)
        },
        handlePerCentChange(value) {
            console.log(this.per_cent)
        },
        handleXAxisChange(checkedValues) {
            if (typeof checkedValues.find(e => e == "date") == "undefined")
                this.dateChecked = false
            else this.dateChecked = true
        },
        handleSumChange(value) {},
        handleGraphChange(value) {}
    },
    mounted: function() {
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
