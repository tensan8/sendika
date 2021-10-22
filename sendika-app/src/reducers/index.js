import { combineReducers } from "redux";
import model from "./model";
import chembl from "./molecule";
import singleSmile from "./singleSmile";
import data from "./data"

export const reducers = combineReducers({
    mlModel: model,
    chembl: chembl,
    singleSmile: singleSmile,
    data: data
})