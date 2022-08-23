export interface IData {
	id: string;
	city: string;
	degrees: string;
	idToSprite: string;
	ariaTitle: string;
	mainClass: string;
	parentClassForMix?: string;
	checked: boolean;
	classModify?: string;
	info?: string;
	pressure?: string;
	sunset?: string;
}

export interface IState {
	currentCity: IData;
	favourites: Array<IData>;
}

export interface IHint {
	textOne: string;
	textTwo: string;
	textButton?: string;
}

export interface IIcons {
	idToSprite: string;
	mainClass: string;
	parentClassForMix?: string;
	ariaTitle?: string;
	classModify?: string;
}