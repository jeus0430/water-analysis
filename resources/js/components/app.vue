<template>
    <a-config-provider :locale="locale">
        <div id="components-layout-demo-basic">
            <a-layout>
                <a-layout-header>
                    <h1>Water Differences Analytics</h1>
                    <a-button type="primary" @click="showDrawer">
                        Show Sidebar
                    </a-button>
                </a-layout-header>
                <a-layout>
                    <a-drawer
                        title="Search Panel"
                        placement="right"
                        :visible="sidebar"
                        @close="onClose"
                        width="1000"
                    >
                        <a-form
                            label="Search Form"
                            :form="form"
                            @submit="handleSubmit"
                        >
                            <a-form-item :label="trans.waste_zone">
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
                            <a-form-item :label="trans.belongs_to_group">
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
                            <a-form-item :label="trans.mone_av">
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
                            <a-form-item :label="trans.day_date">
                                <a-date-picker
                                    size="large"
                                    format="YYYY-MM-DD"
                                    @change="handleDateMinChange"
                                    placeholder="min date"
                                    v-decorator="[
                                        'date_min',
                                        {
                                            rules: [
                                                {
                                                    required: true,
                                                    message:
                                                        'Please select Min Date!'
                                                }
                                            ]
                                        }
                                    ]"
                                />
                                <a-input
                                    style=" width: 30px; border-left: 0; pointer-events: none; backgroundColor: #fff"
                                    placeholder="~"
                                    size="large"
                                    disabled
                                />
                                <a-date-picker
                                    size="large"
                                    format="YYYY-MM-DD"
                                    v-model="date_max"
                                    placeholder="max date"
                                />
                            </a-form-item>
                            <a-form-item :label="trans.delta">
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
                            <a-form-item :label="trans.per_cent">
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
                                    defaultValue="date"
                                    :options="xOptions"
                                    @change="handleXAxisChange"
                                />
                            </a-form-item>
                            <a-form-item :label="trans.sum">
                                <a-radio-group
                                    v-model="sum"
                                    :options="sumOptions"
                                />
                            </a-form-item>
                            <a-form-item label="Graph:">
                                <a-radio-group
                                    v-model="selectedOneGraph"
                                    :options="oneGraphOptions"
                                />
                            </a-form-item>
                            <a-form-item label="Graph Type:">
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
                                <a-button
                                    size="large"
                                    type="primary"
                                    html-type="submit"
                                >
                                    Show
                                </a-button>
                            </a-form-item>
                        </a-form>
                    </a-drawer>
                    <a-layout-content>
                        <a-row type="flex">
                            <a-col :flex="1">
                                <apexchart
                                    v-if="selectedOneGraph == 'qty'"
                                    :options="chartOptionsQty"
                                    :key="trans_updated"
                                    :series="seriesQty"
                                    :type="graphType"
                                ></apexchart>
                            </a-col>
                        </a-row>
                        <a-row type="flex">
                            <a-col :flex="1">
                                <apexchart
                                    v-if="selectedOneGraph == 'r_qty'"
                                    :options="chartOptionsRqty"
                                    :series="seriesRqty"
                                    :type="graphType"
                                    :key="trans_updated"
                                ></apexchart>
                            </a-col>
                        </a-row>
                        <a-row type="flex">
                            <a-col :flex="1">
                                <apexchart
                                    v-if="selectedOneGraph == 'delta'"
                                    :options="chartOptionsDelta"
                                    :series="seriesDelta"
                                    :key="trans_updated"
                                    :type="graphType"
                                ></apexchart>
                            </a-col>
                        </a-row>
                        <a-row type="flex">
                            <a-col :flex="1">
                                <apexchart
                                    v-if="selectedOneGraph == 'per_cent'"
                                    :options="chartOptionsPercent"
                                    :key="trans_updated"
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
            trans: {
                qty: "qty",
                real_qty: "real qty",
                delta: "delta",
                per_cent: "percent",
                waste_zone: "waste_zone",
                mone_av: "mone_av",
                belongs_to_group: "belongs_to_group",
                day_date: "day_date",
                sum: "sum"
            },
            collapsible: true,
            locale: heIL,
            trans_updated: 0,
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
            date_min: "",
            date_max: "",
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
            graphOptions: ["line", "bar", "area"],
            selectedOneGraph: "qty",
            oneGraphOptions: ["qty", "r_qty", "delta", "per_cent"],
            chartOptionsQty: {
                grid: {
                    borderColor: "#fff",
                    xaxis: {
                        lines: {
                            show: true
                        }
                    }
                },
                title: {
                    text: "qty",
                    style: {
                        fontSize: "20px",
                        color: "#fff"
                    },
                    offsetX: 30
                },
                chart: {
                    background: "#000",
                    id: "vuechart-example",
                    zoom: {
                        type: "x",
                        enabled: true
                    }
                },
                colors: ["#00ff00"],
                yaxis: {
                    axisBorder: {
                        show: true,
                        color: "#fff"
                    },
                    labels: {
                        style: {
                            colors: "#fff"
                        }
                    }
                },
                xaxis: {
                    axisTicks: {
                        show: false
                    },
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
                        },
                        style: {
                            colors: "#fff"
                        }
                    },
                    axisBorder: {
                        show: true,
                        color: "#fff"
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
                grid: {
                    borderColor: "#fff",
                    xaxis: {
                        lines: {
                            show: true
                        }
                    }
                },
                title: {
                    text: "real qty",
                    style: {
                        fontSize: "20px",
                        color: "#fff"
                    },
                    offsetX: 100
                },
                chart: {
                    background: "#000",
                    id: "vuechart-example",
                    zoom: {
                        type: "x",
                        enabled: true
                    }
                },
                colors: ["#0000ff"],
                yaxis: {
                    axisBorder: {
                        show: true,
                        color: "#fff"
                    },
                    labels: {
                        style: {
                            colors: "#fff"
                        }
                    }
                },
                xaxis: {
                    axisTicks: {
                        show: false
                    },
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
                        },
                        style: {
                            colors: "#fff"
                        }
                    },
                    axisBorder: {
                        show: true,
                        color: "#fff"
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
                grid: {
                    borderColor: "#fff",
                    xaxis: {
                        lines: {
                            show: true
                        }
                    }
                },
                title: {
                    text: "delta",
                    style: {
                        fontSize: "20px",
                        color: "#fff"
                    },
                    offsetX: 100
                },
                chart: {
                    background: "#000",
                    id: "vuechart-example",
                    zoom: {
                        type: "x",
                        enabled: true
                    }
                },
                colors: ["#ff0000"],
                yaxis: {
                    axisBorder: {
                        show: true,
                        color: "#fff"
                    },
                    labels: {
                        style: {
                            colors: "#fff"
                        }
                    }
                },
                xaxis: {
                    axisTicks: {
                        show: false
                    },
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
                        },
                        style: {
                            colors: "#fff"
                        }
                    },
                    axisBorder: {
                        show: true,
                        color: "#fff"
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
                grid: {
                    borderColor: "#fff",
                    xaxis: {
                        lines: {
                            show: true
                        }
                    }
                },
                title: {
                    text: "percent",
                    style: {
                        fontSize: "20px",
                        color: "#fff"
                    },
                    offsetX: 100
                },
                chart: {
                    background: "#000",
                    id: "vuechart-example",
                    zoom: {
                        type: "x",
                        enabled: true
                    }
                },
                colors: ["#ffff00"],
                yaxis: {
                    axisBorder: {
                        show: true,
                        color: "#fff"
                    },
                    labels: {
                        style: {
                            colors: "#fff"
                        }
                    }
                },
                xaxis: {
                    axisTicks: {
                        show: false
                    },
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
                        },
                        style: {
                            colors: "#fff"
                        }
                    },
                    axisBorder: {
                        show: true,
                        color: "#fff"
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
        onClose() {
            this.sidebar = false
        },
        forceUpdate() {
            this.$forceUpdate()
        },
        handleSubmit(e) {
            let toCheck = []
            if (!this.zoneChecked) toCheck.push("selectedZones")
            if (!this.groupChecked) toCheck.push("selectedGroups")
            if (!this.moneavChecked) toCheck.push("selectedMoneavs")

            toCheck.push("date_min")
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
        handleDateMinChange(date, dateString) {
            this.date_min = dateString
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

            let date_min = this.date_min
            let date_max = this.date_max
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
                    date_max: date_max,
                    date_min: date_min,
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
                    this.sidebar = false
                })
        },
        showDrawer() {
            this.sidebar = true
        }
    },
    mounted: function() {
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
        axios.get("/api/trans").then(res => {
            this.trans = Object.assign(this.trans, res.data)
            this.chartOptionsQty.title.text = this.trans.qty
            this.chartOptionsRqty.title.text = this.trans.real_qty
            this.chartOptionsDelta.title.text = this.trans.delta
            this.chartOptionsPercent.title.text = this.trans.per_cent
            this.trans_updated = 1
        })
        // axios.get("/api/delta_range").then(res => {
        //     this.delta_min = parseFloat(res.data.min)
        //     this.delta_max = parseFloat(res.data.max)
        // })
        // axios.get("/api/per_cent_range").then(res => {
        //     this.per_cent_min = parseFloat(res.data.min)
        //     this.per_cent_max = parseFloat(res.data.max)
        // })
    }
}
</script>
wwww
