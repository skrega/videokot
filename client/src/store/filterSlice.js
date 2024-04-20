import {createSlice} from "@reduxjs/toolkit";
import { useRouter } from "next/router";

const filterSlice = createSlice({
    name: 'products',
    initialState: {
        selectedAttributes: [],
        filteredProducts: [],
        queryParamsUrl: []
    },
    reducers: {
        selectedAttrs(state, action) {
            const attributeValue = action.payload.value
            const attributeId = action.payload.id
            const isChecked = action.payload.checked
            const attribute = {
                id: attributeId,
                value: attributeValue
            }
            if (isChecked) {
                state.selectedAttributes = [...state.selectedAttributes, attribute];
            } else {
                state.selectedAttributes = state.selectedAttributes.filter(attr => attr.value !== attributeValue)
            }
           
            // Формируем URL с учетом выбранных атрибутов
            // const queryString = state.selectedAttributes.map(attr => `${attr.id}=${attr.value}`).join('&');
            // state.queryParamsUrl = queryString


        },
        handleFilter(state, action) {

            const filtered = action.payload.filter(product => {
                // const price = parseFloat(product.price);
                // const matchesPrice = price >= filterCriteria.minPrice && price <= filterCriteria.maxPrice;
                const matchesAttributes = state.selectedAttributes.some((selectedAttr) => {
                    return product.attributes.attributes.some((productAttr) => {
                        return productAttr.value === selectedAttr.value;
                    });
                });
                return matchesAttributes;
            });
            state.filteredProducts = [...filtered];

            // const url = `${window.location.pathname}?${state.queryParamsUrl}`;
            // window.history.pushState({}, '', url);
        },
        handleResetFilters(state) {
            state.selectedAttributes = []
            state.filteredProducts = []
            // Удаляем query параметры из URL
            // const url = window.location.pathname;
            // window.history.pushState({}, '', url);
        },
    },
})

export const {
    selectedAttrs,
    handleFilter,
    toggleChecked,
    handleResetFilters
} = filterSlice.actions

export default filterSlice.reducer;