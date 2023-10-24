import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type ChatKeySpecifier = ('createdAt' | 'id' | 'message' | 'room' | 'type' | 'updatedAt' | 'user' | ChatKeySpecifier)[];
export type ChatFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	room?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatRoomKeySpecifier = ('chats' | 'createdAt' | 'haveJoined' | 'id' | 'name' | 'updatedAt' | 'users' | ChatRoomKeySpecifier)[];
export type ChatRoomFieldPolicy = {
	chats?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	haveJoined?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('addMessage' | 'createRoom' | 'joinRoom' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	addMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	createRoom?: FieldPolicy<any> | FieldReadFunction<any>,
	joinRoom?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('chats' | 'rooms' | 'sessionUser' | 'users' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	chats?: FieldPolicy<any> | FieldReadFunction<any>,
	rooms?: FieldPolicy<any> | FieldReadFunction<any>,
	sessionUser?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryChatsConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | QueryChatsConnectionKeySpecifier)[];
export type QueryChatsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryChatsConnectionEdgeKeySpecifier = ('cursor' | 'node' | QueryChatsConnectionEdgeKeySpecifier)[];
export type QueryChatsConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryRoomsConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | QueryRoomsConnectionKeySpecifier)[];
export type QueryRoomsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryRoomsConnectionEdgeKeySpecifier = ('cursor' | 'node' | QueryRoomsConnectionEdgeKeySpecifier)[];
export type QueryRoomsConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryUsersConnectionKeySpecifier = ('edges' | 'pageInfo' | 'totalCount' | QueryUsersConnectionKeySpecifier)[];
export type QueryUsersConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryUsersConnectionEdgeKeySpecifier = ('cursor' | 'node' | QueryUsersConnectionEdgeKeySpecifier)[];
export type QueryUsersConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionKeySpecifier = ('chatSub' | SubscriptionKeySpecifier)[];
export type SubscriptionFieldPolicy = {
	chatSub?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('createdAt' | 'id' | 'name' | 'rooms' | 'updatedAt' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	rooms?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Chat?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatKeySpecifier | (() => undefined | ChatKeySpecifier),
		fields?: ChatFieldPolicy,
	},
	ChatRoom?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatRoomKeySpecifier | (() => undefined | ChatRoomKeySpecifier),
		fields?: ChatRoomFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	QueryChatsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryChatsConnectionKeySpecifier | (() => undefined | QueryChatsConnectionKeySpecifier),
		fields?: QueryChatsConnectionFieldPolicy,
	},
	QueryChatsConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryChatsConnectionEdgeKeySpecifier | (() => undefined | QueryChatsConnectionEdgeKeySpecifier),
		fields?: QueryChatsConnectionEdgeFieldPolicy,
	},
	QueryRoomsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryRoomsConnectionKeySpecifier | (() => undefined | QueryRoomsConnectionKeySpecifier),
		fields?: QueryRoomsConnectionFieldPolicy,
	},
	QueryRoomsConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryRoomsConnectionEdgeKeySpecifier | (() => undefined | QueryRoomsConnectionEdgeKeySpecifier),
		fields?: QueryRoomsConnectionEdgeFieldPolicy,
	},
	QueryUsersConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryUsersConnectionKeySpecifier | (() => undefined | QueryUsersConnectionKeySpecifier),
		fields?: QueryUsersConnectionFieldPolicy,
	},
	QueryUsersConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryUsersConnectionEdgeKeySpecifier | (() => undefined | QueryUsersConnectionEdgeKeySpecifier),
		fields?: QueryUsersConnectionEdgeFieldPolicy,
	},
	Subscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriptionKeySpecifier | (() => undefined | SubscriptionKeySpecifier),
		fields?: SubscriptionFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;