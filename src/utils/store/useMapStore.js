import {computed} from "vue";
import {forEach} from "../common";


export function useMapStore() {
    let [that] = [...arguments];

    class MapStore {
        constructor(that) {
            this.that = that;
            this.useMapStateUtil = this.useMapStateUtil.bind(this)
            this.useMapMutationsUtil = this.useMapMutationsUtil.bind(this)
        }

        useMapStateUtil(mapStates) {
            let {useMapStateUtil, that} = this
            forEach(mapStates, function (value, key) {
                useMapStateUtil[key] = computed(value.bind(that))
            });
            return useMapStateUtil
        }

        useMapMutationsUtil(mapMutations) {
            let {useMapMutationsUtil, that} = this
            forEach(mapMutations, function (value, key) {
                useMapMutationsUtil[key] = value.bind(that)
            });
            return useMapMutationsUtil
        }
    }

    return new MapStore(that);
}
