<template>
    <a-config-provider :locale="locale">
        <div id="components-layout-demo-basic">
            <a-layout>
                <a-layout-header>
                    <h1>Water Differences Analytics</h1>
                    <a-checkbox v-model="sidebar">
                        Sidebar {{ sidebar ? "Visible" : "Hidden" }}
                    </a-checkbox>
                </a-layout-header>
                <a-layout>
                    <a-layout-sider width="400" v-if="sidebar">
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
                                <a-input-number
                                    v-model="delta_min"
                                    style=" width: 150px; text-align: center"
                                    placeholder="Minium Delta"
                                />
                                <a-input
                                    style=" width: 30px; border-left: 0; pointer-events: none; backgroundColor: #fff"
                                    placeholder="~"
                                    disabled
                                />
                                <a-input-number
                                    style=" width: 150px; text-align: center"
                                    v-model="delta_max"
                                    placeholder="Maximum Delta"
                                />
                            </a-form-item>
                            <a-form-item label="per_cent:">
                                <a-input-number
                                    v-model="per_cent_min"
                                    style=" width: 150px; text-align: center"
                                    placeholder="Minium Percent"
                                />
                                <a-input
                                    style=" width: 30px; border-left: 0; pointer-events: none; backgroundColor: #fff"
                                    placeholder="~"
                                    disabled
                                />
                                <a-input-number
                                    style=" width: 150px; text-align: center"
                                    v-model="per_cent_max"
                                    placeholder="Maximum Percent"
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
                            <a-form-item label="Sum:">
                                <a-radio-group
                                    v-model="sum"
                                    :options="sumOptions"
                                />
                            </a-form-item>
                            <a-form-item label="Graph:">
                                <a-radio-group
                                    name="graph"
                                    v-model="graphType"
                                    :options="graphOptions"
                                />
                            </a-form-item>
                            <a-form-item
                                v-if="graphType == 'bar'"
                                label="Stacked:"
                            >
                                <a-checkbox @change="handleStackedChange">
                                    Checkbox
                                </a-checkbox>
                            </a-form-item>
                            <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
                                <a-button type="primary" html-type="submit">
                                    Draw
                                </a-button>
                            </a-form-item>
                        </a-form>
                    </a-layout-sider>
                    <a-layout-content>
                        <a-row type="flex">
                            <a-col :flex="1">
                                <apexchart
                                    :options="chartOptionsQty"
                                    :series="seriesQty"
                                    :type="graphType"
                                ></apexchart>
                            </a-col>
                            <a-col :flex="1">
                                <apexchart
                                    :options="chartOptionsRqty"
                                    :series="seriesRqty"
                                    :type="graphType"
                                ></apexchart>
                            </a-col>
                        </a-row>
                        <a-row type="flex">
                            <a-col :flex="1">
                                <apexchart
                                    :options="chartOptionsDelta"
                                    :series="seriesDelta"
                                    :type="graphType"
                                ></apexchart>
                            </a-col>
                            <a-col :flex="1">
                                <apexchart
                                    :options="chartOptionsPercent"
                                    :series="seriesPercent"
                                    :type="graphType"
                                ></apexchart>
                            </a-col>
                        </a-row>
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
            collapsible: true,
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
            sidebar: true,
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
            chartOptionsQty: {
                chart: {
                    id: "vuechart-example",
                    zoom: {
                        type: "x",
                        enabled: true
                    }
                },
                xaxis: {
                    type: "datetime",
                    labels: {
                        formatter: function(value, timestamp, opts) {
                            if (value % 10 == 1) {
                                let d = new Date(value - 1)
                                // Copy date so don't modify original
                                d = new Date(
                                    Date.UTC(
                                        d.getFullYear(),
                                        d.getMonth(),
                                        d.getDate()
                                    )
                                )
                                // Set to nearest Thursday: current date + 4 - current day number
                                // Make Sunday's day number 7
                                d.setUTCDate(
                                    d.getUTCDate() + 4 - (d.getUTCDay() || 7)
                                )
                                // Get first day of year
                                var yearStart = new Date(
                                    Date.UTC(d.getUTCFullYear(), 0, 1)
                                )
                                // Calculate full weeks to nearest Thursday
                                var weekNo = Math.ceil(
                                    ((d - yearStart) / 86400000 + 1) / 7
                                )
                                // Return array of year and week number
                                return d.getUTCFullYear() + "-" + weekNo + "W"
                            } else if (value % 10 == 2) {
                                let d = new Date(value - 2)
                                return d.getFullYear() + "-" + d.getMonth()
                            } else if (value % 10 == 3) {
                                let d = new Date(value - 3)
                                return d.getFullYear()
                            } else {
                                const d = new Date(value)
                                return d.toISOString().split("T")[0]
                            }
                        }
                    }
                }
            },
            seriesQty: [
                {
                    name: "Vue Chart",
                    data: []
                }
            ],
            chartOptionsRqty: {
                chart: {
                    id: "vuechart-example",
                    zoom: {
                        type: "x",
                        enabled: true
                    }
                },
                xaxis: {
                    type: "datetime",
                    labels: {
                        formatter: function(value, timestamp, opts) {
                            if (value % 10 == 1) {
                                let d = new Date(value - 1)
                                // Copy date so don't modify original
                                d = new Date(
                                    Date.UTC(
                                        d.getFullYear(),
                                        d.getMonth(),
                                        d.getDate()
                                    )
                                )
                                // Set to nearest Thursday: current date + 4 - current day number
                                // Make Sunday's day number 7
                                d.setUTCDate(
                                    d.getUTCDate() + 4 - (d.getUTCDay() || 7)
                                )
                                // Get first day of year
                                var yearStart = new Date(
                                    Date.UTC(d.getUTCFullYear(), 0, 1)
                                )
                                // Calculate full weeks to nearest Thursday
                                var weekNo = Math.ceil(
                                    ((d - yearStart) / 86400000 + 1) / 7
                                )
                                // Return array of year and week number
                                return d.getUTCFullYear() + "-" + weekNo + "W"
                            } else if (value % 10 == 2) {
                                let d = new Date(value - 2)
                                return d.getFullYear() + "-" + d.getMonth()
                            } else if (value % 10 == 3) {
                                let d = new Date(value - 3)
                                return d.getFullYear()
                            } else {
                                const d = new Date(value)
                                return d.toISOString().split("T")[0]
                            }
                        }
                    }
                }
            },
            seriesRqty: [
                {
                    name: "Vue Chart",
                    data: []
                }
            ],
            chartOptionsDelta: {
                chart: {
                    id: "vuechart-example",
                    zoom: {
                        type: "x",
                        enabled: true
                    }
                },
                xaxis: {
                    type: "datetime",
                    labels: {
                        formatter: function(value, timestamp, opts) {
                            if (value % 10 == 1) {
                                let d = new Date(value - 1)
                                // Copy date so don't modify original
                                d = new Date(
                                    Date.UTC(
                                        d.getFullYear(),
                                        d.getMonth(),
                                        d.getDate()
                                    )
                                )
                                // Set to nearest Thursday: current date + 4 - current day number
                                // Make Sunday's day number 7
                                d.setUTCDate(
                                    d.getUTCDate() + 4 - (d.getUTCDay() || 7)
                                )
                                // Get first day of year
                                var yearStart = new Date(
                                    Date.UTC(d.getUTCFullYear(), 0, 1)
                                )
                                // Calculate full weeks to nearest Thursday
                                var weekNo = Math.ceil(
                                    ((d - yearStart) / 86400000 + 1) / 7
                                )
                                // Return array of year and week number
                                return d.getUTCFullYear() + "-" + weekNo + "W"
                            } else if (value % 10 == 2) {
                                let d = new Date(value - 2)
                                return d.getFullYear() + "-" + d.getMonth()
                            } else if (value % 10 == 3) {
                                let d = new Date(value - 3)
                                return d.getFullYear()
                            } else {
                                const d = new Date(value)
                                return d.toISOString().split("T")[0]
                            }
                        }
                    }
                }
            },
            seriesDelta: [
                {
                    name: "Vue Chart",
                    data: []
                }
            ],
            chartOptionsPercent: {
                chart: {
                    id: "vuechart-example",
                    zoom: {
                        type: "x",
                        enabled: true
                    }
                },
                xaxis: {
                    type: "datetime",
                    labels: {
                        formatter: function(value, timestamp, opts) {
                            if (value % 10 == 1) {
                                let d = new Date(value - 1)
                                // Copy date so don't modify original
                                d = new Date(
                                    Date.UTC(
                                        d.getFullYear(),
                                        d.getMonth(),
                                        d.getDate()
                                    )
                                )
                                // Set to nearest Thursday: current date + 4 - current day number
                                // Make Sunday's day number 7
                                d.setUTCDate(
                                    d.getUTCDate() + 4 - (d.getUTCDay() || 7)
                                )
                                // Get first day of year
                                var yearStart = new Date(
                                    Date.UTC(d.getUTCFullYear(), 0, 1)
                                )
                                // Calculate full weeks to nearest Thursday
                                var weekNo = Math.ceil(
                                    ((d - yearStart) / 86400000 + 1) / 7
                                )
                                // Return array of year and week number
                                return d.getUTCFullYear() + "-" + weekNo + "W"
                            } else if (value % 10 == 2) {
                                let d = new Date(value - 2)
                                return d.getFullYear() + "-" + d.getMonth()
                            } else if (value % 10 == 3) {
                                let d = new Date(value - 3)
                                return d.getFullYear()
                            } else {
                                const d = new Date(value)
                                return d.toISOString().split("T")[0]
                            }
                        }
                    }
                }
            },
            seriesPercent: [
                {
                    name: "Vue Chart",
                    data: []
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
        handleStackedChange(value) {
            this.$apexcharts.exec("vuechart-example", "updateOptions", {
                chart: {
                    stacked: value.target.checked
                }
            })
        },
        handleXAxisChange(e) {
            this.selectedX = e.target.value
        },
        updateChart() {
            let zones = this.selectedZones
            if (this.zoneChecked) zones = []

            let groups = this.selectedGroups
            if (this.groupChecked) groups = this.selectedGroups

            let moneavs = this.selectedMoneavs
            if (this.moneavChecked) moneavs = this.selectedMoneavs

            let dateRange = this.dateRange
            let delta = this.delta
            let per_cent_min = this.per_cent_min
            let per_cent_max = this.per_cent_max
            let delta_min = this.delta_min
            let delta_max = this.delta_max
            let xaxis = this.selectedX
            let sum = this.sum
            let graphType = this.graphType

            axios
                .post("/api/chart", {
                    zones: zones,
                    groups: groups,
                    moneavs: moneavs,
                    dateRange: dateRange,
                    delta_min: delta_min,
                    delta_max: delta_max,
                    per_cent_max: per_cent_max,
                    per_cent_min: per_cent_min,
                    xaxis: xaxis,
                    sum: sum,
                    graphType: graphType
                })
                .then(res => {
                    this.seriesQty = res.data["qty"]
                    this.seriesRqty = res.data["real_qty"]
                    this.seriesPercent = res.data["percent"]
                    this.seriesDelta = res.data["delta"]
                })
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
wwww
