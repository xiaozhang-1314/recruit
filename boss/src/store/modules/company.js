import {
    reqCompanyAddressList,
    reqIndustryList,
    reqFinancingList,
    reqScaleList,
    reqCompanyList,
    reqPopularPositionsList,
    reqPopularCitiesList,
    reqPopularEnterprisesList,
    reqNearbyCitiesList
} from "@/api"

export default {
    state: {
        address: [],
        industry: [],
        financing: [],
        scale: [],
        company: [],
        popularPositions: [],
        popularCities: [],
        popularEnterprises: [],
        nearbyCities: [],
    },
    mutations: {
        GET_ADDRESS(state, address) {
            state.address = address
        },
        GET_INDUSTRY(state, industry) {
            state.industry = industry
        },
        GET_FINANCING(state, financing) {
            state.financing = financing
        },
        GET_SCALE(state, scale) {
            state.scale = scale
        },
        GET_COMPANY(state, company) {
            state.company = company
        },
        GET_POPULARPOSITIONS(state, popularPositions) {
            state.popularPositions = popularPositions
        },
        GET_POPULARCITIES(state, popularCities) {
            state.popularCities = popularCities
        },
        GET_POPULARENTERPRISES(state, popularEnterprises) {
            state.popularEnterprises = popularEnterprises
        },
        GET_NEARBYCITIES(state, nearbyCities) {
            state.nearbyCities = nearbyCities
        },
    },
    actions: {
        async reqCompanyAddressList({ commit }) {
            const res = await reqCompanyAddressList()
            if (res.code === 200) {
                commit("GET_ADDRESS", res.data)
            }
        },
        async reqIndustryList({ commit }) {
            const res = await reqIndustryList()
            if (res.code === 200) {
                commit("GET_INDUSTRY", res.data)
            }
        },
        async reqFinancingList({ commit }) {
            const res = await reqFinancingList()
            if (res.code === 200) {
                commit("GET_FINANCING", res.data)
            }

        },
        async reqScaleList({ commit }) {
            const res = await reqScaleList()
            if (res.code === 200) {
                commit("GET_SCALE", res.data)
            }

        },
        async reqCompanyList({ commit }) {
            const res = await reqCompanyList()
            if (res.code === 200) {
                commit("GET_COMPANY", res.data)
            }

        },
        async reqPopularPositionsList({ commit }) {
            const res = await reqPopularPositionsList()
            if (res.code === 200) {
                commit("GET_POPULARPOSITIONS", res.data)
            }

        },
        async reqPopularCitiesList({ commit }) {
            const res = await reqPopularCitiesList()
            if (res.code === 200) {
                commit("GET_POPULARCITIES", res.data)
            }

        },
        async reqPopularEnterprisesList({ commit }) {
            const res = await reqPopularEnterprisesList()
            if (res.code === 200) {
                commit("GET_POPULARENTERPRISES", res.data)
            }

        },
        async reqNearbyCitiesList({ commit }) {
            const res = await reqNearbyCitiesList()
            if (res.code === 200) {
                commit("GET_NEARBYCITIES", res.data)
            }

        },
    },
    getters: {
    },
}