<template>
    <a-config-provider :locale="locale">
        <div id="components-layout-demo-basic">
            <a-layout>
                <a-layout-header>
                    <h1>Water Differences Analytics</h1>
                    <a-button type="primary" @click="showDrawer" size="large">
                        Show Sidebar
                    </a-button>
                </a-layout-header>
                <a-layout>
                    <a-drawer
                        placement="right"
                        :visible="sidebar"
                        @close="onClose"
                        :width="widthofscreen"
                    >
                        <a-form
                            label="Search Form"
                            :form="form"
                            @submit="handleSubmit"
                        >
                            <div
                                style="display: grid;grid-template: auto / 1fr 1fr 1fr 1fr;grid-column-gap: 24px;grid-row-gap: 24px; align-items: flex-end;text-align:center;justify-items: center;"
                            >
                                <div style="grid-column: 1/5;width: 100%;">
                                    <a-form-item :label="trans.waste_zone">
                                        <a-checkbox
                                            v-model="zoneChecked"
                                            @change="handleAllZones"
                                        >
                                            Select All
                                        </a-checkbox>
                                        <a-select
                                            mode="multiple"
                                            placeholder="Select zones"
                                            size="large"
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
                                </div>
                                <div style="grid-column: 1/5;width: 100%;">
                                    <a-form-item
                                        :label="trans.belongs_to_group"
                                    >
                                        <a-checkbox
                                            v-model="groupChecked"
                                            @change="handleAllGroups"
                                        >
                                            Select All
                                        </a-checkbox>
                                        <a-select
                                            mode="multiple"
                                            size="large"
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
                                </div>
                                <div style="grid-column: 1/5;width: 100%">
                                    <a-form-item
                                        :label="trans.mone_av"
                                        class="sm-ch"
                                    >
                                        <a-checkbox
                                            v-model="moneavChecked"
                                            @change="handleAllMones"
                                        >
                                            Select All
                                        </a-checkbox>
                                        <a-select
                                            mode="multiple"
                                            size="large"
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
                                </div>
                                <div style="grid-column: 1/3;width: 100%;">
                                    <a-form-item :label="trans.delta">
                                        <a-input-number
                                            v-model="delta_min"
                                            style="width: 265px; text-align: center"
                                            placeholder="Minium Delta"
                                            size="large"
                                        />
                                        <a-input-number
                                            style="width: 265px; text-align: center"
                                            size="large"
                                            v-model="delta_max"
                                            placeholder="Maximum Delta"
                                        />
                                    </a-form-item>
                                </div>
                                <div style="grid-column: 3/5;width: 100%;">
                                    <a-form-item :label="trans.per_cent">
                                        <a-input-number
                                            size="large"
                                            v-model="per_cent_min"
                                            style=" width: 265px; text-align: center"
                                            placeholder="Minium Percent"
                                        />
                                        <a-input-number
                                            style="width: 265px; text-align: center"
                                            size="large"
                                            v-model="per_cent_max"
                                            placeholder="Maximum Percent"
                                        />
                                    </a-form-item>
                                </div>
                                <div style="grid-column: 1/3;width: 100%;">
                                    <a-form-item label="Minium Date">
                                        <a-date-picker
                                            show-time
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
                                    </a-form-item>
                                </div>
                                <div style="grid-column: 3/5;width: 100%;">
                                    <a-form-item label="Maxium Date">
                                        <a-date-picker
                                            show-time
                                            size="large"
                                            format="YYYY-MM-DD"
                                            @change="handleDateMaxChange"
                                            placeholder="max date"
                                            v-decorator="[
                                                'date_max',
                                                {
                                                    rules: [
                                                        {
                                                            required: true,
                                                            message:
                                                                'Please select Max Date!'
                                                        }
                                                    ]
                                                }
                                            ]"
                                        />
                                    </a-form-item>
                                </div>
                                <div style="grid-column: 1/3;width: 100%;">
                                    <a-form-item label="X-axis:">
                                        <a-radio-group
                                            name="xaxis"
                                            :value="selectedX"
                                            defaultValue="date"
                                            :options="xOptions"
                                            @change="handleXAxisChange"
                                        />
                                    </a-form-item>
                                </div>
                                <div style="grid-column: 3/5;width: 100%;">
                                    <a-form-item :label="trans.sum">
                                        <a-radio-group
                                            v-model="sum"
                                            :options="sumOptions"
                                        />
                                    </a-form-item>
                                </div>
                                <div
                                    style="grid-column: 1/3;width: 100%;align-self: baseline;"
                                >
                                    <a-form-item label="Graph Type:">
                                        <a-radio-group
                                            name="graph"
                                            v-model="graphType"
                                            :options="graphOptions"
                                        />
                                    </a-form-item>
                                </div>
                                <div style="grid-column: 3/5;width: 100%;">
                                    <a-form-item label="Graph:">
                                        <a-radio-group
                                            v-model="selectedOneGraph"
                                            :options="oneGraphOptions"
                                        />
                                    </a-form-item>
                                </div>
                                <div style="grid-column: 1/3;width: 100%;">
                                    <a-form-item v-if="graphType == 'bar'">
                                        <a-checkbox
                                            @change="handleStackedChange"
                                        >
                                            Stacked
                                        </a-checkbox>
                                    </a-form-item>
                                </div>
                                <div style="grid-column: 3/5;width: 100%">
                                    <a-form-item
                                        :wrapper-col="{ span: 12, offset: 5 }"
                                    >
                                        <a-button
                                            size="large"
                                            type="primary"
                                            html-type="submit"
                                            style="font-size: 50px;line-height: 60px;height: 70px;"
                                        >
                                            Show
                                        </a-button>
                                    </a-form-item>
                                </div>
                            </div>
                        </a-form>
                    </a-drawer>
                    <a-layout-content>
                        <div>
                            <div style="width: 80vw;margin: auto;">
                                <apexchart
                                    v-if="selectedOneGraph == 'qty'"
                                    :options="chartOptionsQty"
                                    :key="trans_updated"
                                    :series="seriesQty"
                                    :type="graphType"
                                ></apexchart>
                            </div>
                        </div>
                        <div style="width: 80vw;margin: auto;">
                            <div>
                                <apexchart
                                    v-if="selectedOneGraph == 'r_qty'"
                                    :options="chartOptionsRqty"
                                    :series="seriesRqty"
                                    :type="graphType"
                                    :key="trans_updated"
                                ></apexchart>
                            </div>
                        </div>
                        <div style="width: 80vw;margin: auto;">
                            <div>
                                <apexchart
                                    v-if="selectedOneGraph == 'delta'"
                                    :options="chartOptionsDelta"
                                    :series="seriesDelta"
                                    :key="trans_updated"
                                    :type="graphType"
                                ></apexchart>
                            </div>
                        </div>
                        <div style="width: 80vw;margin: auto;">
                            <div>
                                <apexchart
                                    v-if="selectedOneGraph == 'per_cent'"
                                    :options="chartOptionsPercent"
                                    :key="trans_updated"
                                    :series="seriesPercent"
                                    :type="graphType"
                                ></apexchart>
                            </div>
                        </div>
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
            widthofscreen: window.innerWidth,
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
            delta_min: -1,
            delta_max: 1,
            per_cent_min: -1,
            per_cent_max: 1,
            xOptions: ["date", "ezor", "group", "mone_av"],
            selectedX: "date",
            sum: "daily",
            sumOptions: ["daily", "weekly", "monthly", "yearly"],
            graphType: "area",
            graphOptions: ["line", "bar", "area"],
            selectedOneGraph: "qty",
            oneGraphOptions: ["qty", "r_qty", "delta", "per_cent"],
            chartOptionsQty: {
                stroke: {
                    width: 1
                },
                dataLabels: {
                    style: {
                        fontSize: "24px"
                    }
                },
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
                        fontSize: "40px",
                        color: "#fff"
                    },
                    offsetX: 200
                },
                chart: {
                    background: "#000",
                    id: "vuechart-example",
                    height: "100%",
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
                            colors: "#fff",
                            fontSize: "24px"
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
                                if (typeof value != "undefined") {
                                    const d = new Date(value)
                                    return d.toISOString().split("T")[0]
                                } else {
                                    return "0"
                                }
                            }
                        },
                        style: {
                            colors: "#fff",
                            fontSize: "24px"
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
                dataLabels: {
                    style: {
                        fontSize: "24px"
                    }
                },
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
                        fontSize: "40px",
                        color: "#fff"
                    },
                    offsetX: 300
                },
                chart: {
                    height: "1000px",
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
                            colors: "#fff",
                            fontSize: "24px"
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
                            colors: "#fff",
                            fontSize: "24px"
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
                dataLabels: {
                    style: {
                        fontSize: "24px"
                    }
                },
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
                        fontSize: "40px",
                        color: "#fff"
                    },
                    offsetX: 300
                },
                chart: {
                    height: "1000px",
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
                            colors: "#fff",
                            fontSize: "24px"
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
                            colors: "#fff",
                            fontSize: "24px"
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
                dataLabels: {
                    style: {
                        fontSize: "24px"
                    }
                },
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
                        fontSize: "40px",
                        color: "#fff"
                    },
                    offsetX: 300
                },
                chart: {
                    height: "1000px",
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
                            colors: "#fff",
                            fontSize: "24px"
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
                            colors: "#fff",
                            fontSize: "24px"
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
            toCheck.push("date_max")
            this.form.validateFields(toCheck, (err, values) => {
                if (!err) {
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
        handleDateMinChange(d, s) {
            this.form.setFieldsValue({
                date_min: s
            })
        },
        handleDateMaxChange(d, s) {
            this.form.setFieldsValue({
                date_max: s
            })
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
            let date_min = this.form.getFieldValue("date_min")
            let date_max = this.form.getFieldValue("date_max")
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
                    delta_min: delta_min,
                    delta_max: delta_max,
                    per_cent_max: per_cent_max,
                    per_cent_min: per_cent_min,
                    date_max: date_max,
                    date_min: date_min,
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
        },
        handleAllZones(e) {
            if (e.target.checked) {
                this.form.setFieldsValue({
                    selectedZones: this.zones.map(e => e.waste_zone)
                })
            } else {
                this.form.setFieldsValue({
                    selectedZones: []
                })
            }
        },
        handleAllGroups(e) {
            if (e.target.checked) {
                this.form.setFieldsValue({
                    selectedGroups: this.groups.map(e => e.waste_group)
                })
            } else {
                this.form.setFieldsValue({
                    selectedGroups: []
                })
            }
        },
        handleAllMones(e) {
            if (e.target.checked) {
                this.form.setFieldsValue({
                    selectedMoneavs: this.mone_avs.map(e => e.mone_av)
                })
            } else {
                this.form.setFieldsValue({
                    selectedMoneavs: []
                })
            }
        }
    },
    mounted: function() {
        axios.get("/api/zones").then(res => {
            let data = res.data
            this.zones = data
            this.form.setFieldsValue({
                selectedZones: this.zones.map(e => e.waste_zone)
            })
        })
        axios.get("/api/groups").then(res => {
            this.groups = res.data
            this.form.setFieldsValue({
                selectedGroups: this.groups.map(e => e.waste_group)
            })
        })
        axios.get("/api/mone_avs").then(res => {
            this.mone_avs = res.data
            this.form.setFieldsValue({
                selectedMoneavs: this.mone_avs.map(e => e.mone_av)
            })
        })
        axios.get("/api/trans").then(res => {
            this.trans = Object.assign(this.trans, res.data)
            this.chartOptionsQty.title.text = this.trans.qty
            this.chartOptionsRqty.title.text = this.trans.real_qty
            this.chartOptionsDelta.title.text = this.trans.delta
            this.chartOptionsPercent.title.text = this.trans.per_cent
            this.trans_updated = 1
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
