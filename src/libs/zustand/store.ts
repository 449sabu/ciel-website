import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { Pool } from "@/types";

type Connecting = {
	name: string;
	isEnabled: boolean;
	delegation: string | null;
};

type StoreProps = {
	connecting: Connecting;
	setConnecting: (payload: Connecting) => void;
	currentPool: Pool | null;
	setCurrentPool: (payload: Pool) => void;
	myPool: Pool | null;
	setMyPool: (payload: Pool) => void;
};

export const useStore = create<StoreProps>()(
	devtools((set) => ({
		connecting: {
			name: "",
			isEnabled: false,
			delegation: null,
		},
		setConnecting: (payload) => set({ connecting: payload }),
		currentPool: null,
		setCurrentPool: (payload) => set({ currentPool: payload }),
		myPool: null,
		setMyPool: (payload) => set({ myPool: payload }),
	}))
);
