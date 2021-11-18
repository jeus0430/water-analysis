<template>
    <a-config-provider>
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
                                style="display: grid;grid-template: auto / 1fr 1fr 1fr 1fr;grid-column-gap: 24px;grid-row-gap: 20px; align-items: flex-end;text-align:center;justify-items: center;"
                            >
                                <div style="grid-column: 1/5;width: 100%;">
                                    <a-form-item :label="$t('zone')">
                                        <a-checkbox
                                            v-model="zoneChecked"
                                            @change="handleAllZones"
                                        >
                                            {{ $t("select_all") }}
                                        </a-checkbox>
                                        <a-select
                                            mode="multiple"
                                            :placeholder="
                                                $t('select_zones_placeholder')
                                            "
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
                                <div
                                    style="grid-column: 1/5;width: 100%;"
                                    :label="$t('group')"
                                >
                                    <a-form-item>
                                        <a-checkbox
                                            v-model="groupChecked"
                                            @change="handleAllGroups"
                                        >
                                            {{ $t("select_all") }}
                                        </a-checkbox>
                                        <a-select
                                            mode="multiple"
                                            size="large"
                                            :placeholder="
                                                $t('select_groups_placeholder')
                                            "
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
                                        class="sm-ch"
                                        :label="$t('mone')"
                                    >
                                        <a-checkbox
                                            v-model="moneavChecked"
                                            @change="handleAllMones"
                                        >
                                            {{ $t("select_all") }}
                                        </a-checkbox>
                                        <a-select
                                            mode="multiple"
                                            size="large"
                                            :placeholder="
                                                $t('select_mones_placeholder')
                                            "
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
                                    <a-form-item :label="$t('delta')">
                                        <a-input-number
                                            v-model="delta_min"
                                            style="width: 265px; text-align: center"
                                            :placeholder="$t('minimum')"
                                            size="large"
                                        />
                                        <a-input-number
                                            style="width: 265px; text-align: center"
                                            size="large"
                                            v-model="delta_max"
                                            :placeholder="$t('maximum')"
                                        />
                                    </a-form-item>
                                </div>
                                <div style="grid-column: 3/5;width: 100%;">
                                    <a-form-item :label="$t('percent')">
                                        <a-input-number
                                            size="large"
                                            v-model="per_cent_min"
                                            style=" width: 265px; text-align: center"
                                            :placeholder="$t('minimum')"
                                        />
                                        <a-input-number
                                            style="width: 265px; text-align: center"
                                            size="large"
                                            v-model="per_cent_max"
                                            :placeholder="$t('maximum')"
                                        />
                                    </a-form-item>
                                </div>
                                <div style="grid-column: 1/3;width: 100%;">
                                    <a-form-item :label="$t('minimum')">
                                        <datepicker
                                            @selected="handleDateMinChange"
                                            :placeholder="$t('minimum')"
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
                                        >
                                        </datepicker>
                                    </a-form-item>
                                </div>
                                <div style="grid-column: 3/5;width: 100%;">
                                    <a-form-item :label="$t('maximum')">
                                        <datepicker
                                            @selected="handleDateMaxChange"
                                            :placeholder="$t('maximum')"
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
                                        ></datepicker>
                                    </a-form-item>
                                </div>
                                <div style="grid-column: 1/3;width: 100%;">
                                    <a-form-item :label="$t('x_axis')">
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
                                    <a-form-item :label="$t('sum')">
                                        <a-radio-group
                                            v-model="sum"
                                            :options="sumOptions"
                                        />
                                    </a-form-item>
                                </div>
                                <div style="grid-column: 1/3;width: 100%;">
                                    <a-form-item :label="$t('graph_type')">
                                        <a-radio-group
                                            name="graph"
                                            v-model="graphType"
                                            :options="graphOptions"
                                        />
                                    </a-form-item>
                                </div>
                                <div style="grid-column: 3/5;width: 100%;">
                                    <a-form-item :label="$t('graph_data')">
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
                                            {{ $t("stacked") }}
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
                                        >
                                            {{ $t("show") }}
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
                                    ref="qtyChart"
                                    v-if="selectedOneGraph == 'qty'"
                                    :options="chartOptionsQty"
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
                                ></apexchart>
                            </div>
                        </div>
                        <div style="width: 80vw;margin: auto;">
                            <div>
                                <apexchart
                                    v-if="selectedOneGraph == 'delta'"
                                    :options="chartOptionsDelta"
                                    :series="seriesDelta"
                                    :type="graphType"
                                ></apexchart>
                            </div>
                        </div>
                        <div style="width: 80vw;margin: auto;">
                            <div>
                                <apexchart
                                    v-if="selectedOneGraph == 'percent'"
                                    :options="chartOptionsPercent"
                                    :series="seriesPercent"
                                    :type="graphType"
                                ></apexchart>
                            </div>
                        </div>
                    </a-layout-content>
                </a-layout>
                <notifications group="foo" width="400px" />
            </a-layout>
        </div>
    </a-config-provider>
</template>

<script>
import axios from "axios"
import moment from "moment"

export default {
    data() {
        return {
            widthofscreen: window.innerWidth,
            collapsible: true,
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

            xOptions: [
                { label: this.$i18n.t("date"), value: "date" },
                { label: this.$i18n.t("zone"), value: "zone" },
                { label: this.$i18n.t("group"), value: "group" },
                { label: this.$i18n.t("mone"), value: "mone" }
            ],
            selectedX: "date",
            sum: "daily",
            sumOptions: [
                { label: this.$i18n.t("daily"), value: "daily" },
                { label: this.$i18n.t("weekly"), value: "weekly" },
                { label: this.$i18n.t("monthly"), value: "monthly" },
                { label: this.$i18n.t("yearly"), value: "yearly" }
            ],
            graphType: "area",
            graphOptions: [
                { label: this.$i18n.t("line"), value: "line" },
                { label: this.$i18n.t("bar"), value: "bar" },
                { label: this.$i18n.t("area"), value: "area" }
            ],
            selectedOneGraph: "qty",
            oneGraphOptions: [
                { label: this.$i18n.t("qty"), value: "qty" },
                { label: this.$i18n.t("real_qty"), value: "r_qty" },
                { label: this.$i18n.t("delta"), value: "delta" },
                { label: this.$i18n.t("percent"), value: "percent" }
            ],
            chartOptionsQty: {
                theme: {
                    palette: "palette7"
                },
                stroke: { width: 2 },
                dataLabels: {
                    style: { fontSize: "18px" },
                    background: { opacity: 0.8 }
                },
                title: {
                    text: this.$i18n.t("qty"),
                    style: { fontSize: "50px", color: "#000" },
                    offsetX: 300
                },
                chart: {
                    background: "#b1b1b1",
                    id: "vuechart-example",
                    height: "100%",
                    zoom: {
                        type: "x",
                        enabled: true
                    },
                    toolbar: {
                        export: {
                            csv: {
                                dateFormatter(value) {
                                    console.log(value)
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
                                            d.getUTCDate() +
                                                4 -
                                                (d.getUTCDay() || 7)
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
                                        return (
                                            d.getUTCFullYear() +
                                            "-" +
                                            weekNo +
                                            "W"
                                        )
                                    } else if (value % 10 == 2) {
                                        let d = new Date(value - 2)
                                        return (
                                            d.getFullYear() + "-" + d.getMonth()
                                        )
                                    } else if (value % 10 == 3) {
                                        let d = new Date(value - 3)
                                        return d.getFullYear()
                                    } else {
                                        if (typeof value != "undefined") {
                                            const d = new Date(value)
                                            return d.toISOString().split("T")[0]
                                        } else {
                                            return ""
                                        }
                                    }
                                },
                                headerCategory: "date"
                            }
                        }
                    }
                },
                yaxis: {
                    tickAmount: 30,
                    axisBorder: {
                        show: false
                    },
                    labels: {
                        style: {
                            fontSize: "20px",
                            colors: "#444"
                        }
                    }
                },
                grid: {
                    borderColor: "#777",
                    xaxis: { lines: { show: true } },
                    yaxis: { lines: { show: true } }
                },
                xaxis: {
                    tickAmount: 30,
                    axisTicks: {
                        height: true
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
                                    return ""
                                }
                            }
                        },
                        style: {
                            colors: "#444",
                            fontSize: "20px"
                        }
                    },
                    axisBorder: {
                        show: false
                    }
                }
            },
            seriesQty: [
                {
                    name: "Qty Chart",
                    data: []
                }
            ],
            chartOptionsRqty: {
                theme: {
                    palette: "palette1"
                },
                stroke: { width: 2 },
                dataLabels: {
                    style: { fontSize: "18px" },
                    background: { opacity: 0.8 }
                },
                grid: {
                    borderColor: "#777",
                    xaxis: { lines: { show: true } },
                    yaxis: { lines: { show: true } }
                },
                title: {
                    text: this.$i18n.t("real_qty"),
                    style: { fontSize: "50px", color: "#000" },
                    offsetX: 300
                },
                chart: {
                    background: "#b1b1b1",
                    id: "vuechart-example",
                    height: "100%",
                    zoom: {
                        type: "x",
                        enabled: true
                    },
                    toolbar: {
                        export: {
                            csv: {
                                dateFormatter(value) {
                                    console.log(value)
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
                                            d.getUTCDate() +
                                                4 -
                                                (d.getUTCDay() || 7)
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
                                        return (
                                            d.getUTCFullYear() +
                                            "-" +
                                            weekNo +
                                            "W"
                                        )
                                    } else if (value % 10 == 2) {
                                        let d = new Date(value - 2)
                                        return (
                                            d.getFullYear() + "-" + d.getMonth()
                                        )
                                    } else if (value % 10 == 3) {
                                        let d = new Date(value - 3)
                                        return d.getFullYear()
                                    } else {
                                        if (typeof value != "undefined") {
                                            const d = new Date(value)
                                            return d.toISOString().split("T")[0]
                                        } else {
                                            return ""
                                        }
                                    }
                                },
                                headerCategory: "date"
                            }
                        }
                    }
                },
                yaxis: {
                    tickAmount: 30,
                    axisBorder: {
                        show: false
                    },
                    labels: {
                        style: {
                            fontSize: "20px",
                            colors: "#444"
                        }
                    }
                },
                xaxis: {
                    tickAmount: 30,
                    axisTicks: {
                        height: true
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
                                    return ""
                                }
                            }
                        },
                        style: {
                            colors: "#444",
                            fontSize: "20px"
                        }
                    },
                    axisBorder: {
                        show: false
                    }
                }
            },
            seriesRqty: [
                {
                    name: "Real Chart",
                    data: []
                }
            ],
            chartOptionsPercent: {
                theme: {
                    palette: "palette10"
                },
                stroke: { width: 2 },
                dataLabels: {
                    style: { fontSize: "18px" },
                    background: { opacity: 0.8 }
                },
                grid: {
                    borderColor: "#777",
                    xaxis: { lines: { show: true } },
                    yaxis: { lines: { show: true } }
                },
                title: {
                    text: this.$i18n.t("percent"),
                    style: { fontSize: "50px", color: "#000" },
                    offsetX: 300
                },
                chart: {
                    background: "#b1b1b1",
                    id: "vuechart-example",
                    height: "100%",
                    zoom: {
                        type: "x",
                        enabled: true
                    },
                    toolbar: {
                        export: {
                            csv: {
                                dateFormatter(value) {
                                    console.log(value)
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
                                            d.getUTCDate() +
                                                4 -
                                                (d.getUTCDay() || 7)
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
                                        return (
                                            d.getUTCFullYear() +
                                            "-" +
                                            weekNo +
                                            "W"
                                        )
                                    } else if (value % 10 == 2) {
                                        let d = new Date(value - 2)
                                        return (
                                            d.getFullYear() + "-" + d.getMonth()
                                        )
                                    } else if (value % 10 == 3) {
                                        let d = new Date(value - 3)
                                        return d.getFullYear()
                                    } else {
                                        if (typeof value != "undefined") {
                                            const d = new Date(value)
                                            return d.toISOString().split("T")[0]
                                        } else {
                                            return ""
                                        }
                                    }
                                },
                                headerCategory: "date"
                            }
                        }
                    }
                },
                yaxis: {
                    tickAmount: 30,
                    axisBorder: {
                        show: false
                    },
                    labels: {
                        style: {
                            fontSize: "20px",
                            colors: "#444"
                        }
                    }
                },
                xaxis: {
                    tickAmount: 30,
                    axisTicks: {
                        height: true
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
                                    return ""
                                }
                            }
                        },
                        style: {
                            colors: "#444",
                            fontSize: "20px"
                        }
                    },
                    axisBorder: {
                        show: false
                    }
                }
            },
            seriesPercent: [
                {
                    name: "Percent Chart",
                    data: []
                }
            ],
            chartOptionsDelta: {
                theme: {
                    palette: "palette8"
                },
                stroke: { width: 2 },
                dataLabels: {
                    style: { fontSize: "18px" },
                    background: { opacity: 0.8 }
                },
                grid: {
                    borderColor: "#777",
                    xaxis: { lines: { show: true } },
                    yaxis: { lines: { show: true } }
                },
                title: {
                    text: this.$i18n.t("delta"),
                    style: { fontSize: "50px", color: "#000" },
                    offsetX: 300
                },
                chart: {
                    background: "#b1b1b1",
                    id: "vuechart-example",
                    height: "100%",
                    zoom: {
                        type: "x",
                        enabled: true
                    },
                    toolbar: {
                        export: {
                            csv: {
                                dateFormatter(value) {
                                    console.log(value)
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
                                            d.getUTCDate() +
                                                4 -
                                                (d.getUTCDay() || 7)
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
                                        return (
                                            d.getUTCFullYear() +
                                            "-" +
                                            weekNo +
                                            "W"
                                        )
                                    } else if (value % 10 == 2) {
                                        let d = new Date(value - 2)
                                        return (
                                            d.getFullYear() + "-" + d.getMonth()
                                        )
                                    } else if (value % 10 == 3) {
                                        let d = new Date(value - 3)
                                        return d.getFullYear()
                                    } else {
                                        if (typeof value != "undefined") {
                                            const d = new Date(value)
                                            return d.toISOString().split("T")[0]
                                        } else {
                                            return ""
                                        }
                                    }
                                },
                                headerCategory: "date"
                            }
                        }
                    }
                },
                yaxis: {
                    tickAmount: 30,
                    axisBorder: {
                        show: false
                    },
                    labels: {
                        style: {
                            fontSize: "20px",
                            colors: "#444"
                        }
                    }
                },
                xaxis: {
                    tickAmount: 30,
                    axisTicks: {
                        height: true
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
                                    return ""
                                }
                            }
                        },
                        style: {
                            colors: "#444",
                            fontSize: "20px"
                        }
                    },
                    axisBorder: {
                        show: false
                    }
                }
            },
            seriesPercent: [
                {
                    name: "Percent Chart",
                    data: []
                }
            ]
        }
    },
    methods: {
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
        handleDateMinChange(d) {
            this.form.setFieldsValue({
                date_min: moment(d).format("MMMM D YYYY")
            })
        },
        handleDateMaxChange(d, s) {
            this.form.setFieldsValue({
                date_max: moment(d).format("MMMM D YYYY")
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
            if (this.groupChecked) groups = []

            let moneavs = this.selectedMoneavs
            if (this.moneavChecked) moneavs = []
            const date_min_org = this.form.getFieldValue("date_min")
            let date_min = moment(date_min_org, "MMMM D YYYY").format(
                "YYYY-MM-DD"
            )
            const date_max_org = this.form.getFieldValue("date_max")
            let date_max = moment(date_max_org, "MMMM D YYYY").format(
                "YYYY-MM-DD"
            )
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
        axios.get("/api/zones").then(
            res => {
                let data = res.data
                this.zones = data
                this.form.setFieldsValue({
                    selectedZones: this.zones.map(e => e.waste_zone)
                })
            },
            () => {
                this.$notify({
                    type: "warn",
                    group: "foo",
                    title:
                        "<h1 style='font-size: 24px;color: white'>Warning Message:</h1>",
                    text:
                        "<p style='font-size: 16px'>Error to fetch data from Server. Please check your server options file.</p>"
                })
            }
        )
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

<style>
.vdp-datepicker {
    display: flex;
    justify-content: center;
}
.vdp-datepicker input {
    width: 300px;
    border-radius: 4px;
    padding-left: 10px;
    color: #f00;
    font-size: 24px;
    border: none;
}
.vdp-datepicker input:focus-visible {
    outline: none;
}
</style>
