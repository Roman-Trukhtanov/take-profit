import { createContext, Dispatch, Reducer } from 'react';
import {Currency} from "../types";

export enum TakeProfitActionType {
	ADD_ITEM = 'ADD_ITEM',
	REMOVE_ITEM = 'REMOVE_ITEM',
	UPDATE_ITEMS = 'UPDATE_ITEMS',
}

export interface TakeProfitItemData {
	currency: Currency;
	value: number;
	percent: number;
}

type Action = {
	type: TakeProfitActionType;
	payload: TakeProfitItemData | TakeProfitItemData[];
};

export interface ITakeProfitState {
	items: TakeProfitItemData[];
}

export const initialTakeProfitState: ITakeProfitState = {
	items: [],
};

type ContextProps = {
	state: ITakeProfitState;
	dispatch: Dispatch<Action>;
};

export const TakeProfitContext = createContext<Partial<ContextProps>>({
	state: initialTakeProfitState,
	dispatch: () => undefined,
});


export const takeProfitStore: Reducer<ITakeProfitState, Action> = (
	state = initialTakeProfitState,
	action
): ITakeProfitState => {
	switch (action.type) {
		case TakeProfitActionType.ADD_ITEM:
			return !Array.isArray(action.payload)
				? {
					...state,
					items: [...state.items, action.payload],
				}
				: state;
		case TakeProfitActionType.REMOVE_ITEM:
			return {
				...state,
				items: state.items.filter((item) => item !== action.payload),
			};
		case TakeProfitActionType.UPDATE_ITEMS:
			return Array.isArray(action.payload)
				? {
					...state,
					items: [...action.payload],
				}
				: state;
		default:
			return state;
	}
};
