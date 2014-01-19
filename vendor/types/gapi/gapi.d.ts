//noinspection JSUnresolvedFunction
//noinspection JSUnresolvedVariable

declare module gapi.auth {

	interface Token {
		/**
		 * The OAuth 2.0 token. Only present in successful responses
		 */
			access_token: string;
		/**
		 * Details about the error. Only present in error responses
		 */
			error: string;
		/**
		 * The duration, in seconds, the token is valid for. Only present in successful responses
		 */
			expires_in: string;
		/**
		 * The Google API scopes related to this token
		 */
			state: string;
	}

	export function authorize(params: {
		/**
		 * The application's client ID.
		 */
			client_id?: string;
		/**
		 * If true, then login uses "immediate mode", which means that the token is refreshed behind the scenes, and no UI is shown to the user.
		 */
			immediate?: boolean;
		/**
		 * The OAuth 2.0 response type property. Default: token
		 */
			response_type?: string;
		/**
		 * The auth scope or scopes to authorize. Auth scopes for individual APIs can be found in their documentation.
		 */
			scope?: any[]
	}, callback: (token: Token) => any): void;

	export function getToken(): Token;
}


declare module gapi.client {
	export function load(api: string, version: string, callback: () => void): void;
}

declare module gapi.client.drive {

	export interface Thumbnail {
		image: string;
		mimeType: string;
	}

	export interface Labels {
		starred: boolean;
		hidden: boolean;
		trashed: boolean;
		restricted: boolean;
		viewed: boolean;
	}

	export interface Parent {
		kind: string;
		id: string;
		selfLink: string;
		parentLink: string;
		isRoot: boolean;
	}

	export interface Children {
		kind: string;
		id: string;
		selfLink: string;
		childLink: string;
	}

	export interface Permissions {
		kind: string;
		etag: string;
		id: string;
		selfLink: string;
		name: string;
		emailAddress: string;
		domain: string;
		role: string;
		additionalRoles: string[];
		type: string;
		value: string;
		authKey: string;
		withLink: string;
		photoLink: string;
	}

	export interface Picture {
		url: string;
	}

	export interface User {
		kind: string;
		displayName: string;
		picture: Picture;
		isAuthenticatedUser: boolean;
		permissionId: string;
	}

	export interface Property {
		kind: string;
		etag: string;
		selfLink: string;
		key: string;
		visibility: string;
		value: string;
	}

	export interface Location {
		latitude: number;
		longitude: number;
		altitude: number;

	}

	export interface Image {
		width: number;
		height: number;
		rotation: number;
		location: Location;
	}

	export interface File {
		kind: string;
		id: string;
		etag: string;
		selfLink: string;
		webContentLink: string;
		webViewLink: string;
		alternateLink: string;
		embedLink: string;
		openWithLinks: {[key: string]: string};
		defaultOpenWithLink: string;
		iconLInk: string;
		thumbnailLink: string;
		thumbnail: Thumbnail;
		title: string;
		mimeType: string;
		labels: Labels;
		createdDate: Date;
		modifiedDate: Date;
		lastViewedByMeDate: Date;
		sharedWithMeDate: Date;
		parent: Parent;
		downloadUrl: string;
		exportLinks: {[key: string]: string};
		indexableText: {[key: string]: string};
		userPermission: Permissions;
		originalFilename: string;
		fileExtension: string;
		md5Checksum: string;
		fileSize: number;
		quotaBytesUsed: number;
		ownerNames: string[];
		owners: User[];
		lastModifyingUserName: string;
		lastModifyingUser: User;
		editable: boolean;
		copyable: boolean;
		writersCanShare: boolean;
		shared: boolean;
		explicitlyTrashed: boolean;
		appDataContents: boolean;
		headRevisionId: string;
		properties: Property[];
		imageMediaMetadata: Image;
	}

	export interface AbstractResponse {
		error?: string;
	}

	export interface Future<R> {
		execute: {(callback: (response: R) => any): void;}
	}

	export module files {

		export interface GetRequest {
			fileId: string;
			projection?: string;
			updateViewedDate?: string;
		}

		export interface GetResponse extends AbstractResponse, File {

		}

		export interface ListRequest {
			maxResults?: number;
			pageToken?: string;
			projection?: string;
			q?: string;
		}

		export interface ListResponse extends AbstractResponse {
			kind: string;
			etag: string;
			selfLink: string;
			nextPageToken: string;
			nextLink: string;
			items: File[];
		}


		export function get(request: GetRequest): Future<GetResponse>;
		export function list(request: ListRequest): Future<ListResponse>;

	}

	export module children {

		export interface GetRequest {
			childId: string;
			folderId: string;
		}

		export interface GetResponse extends AbstractResponse, Children {

		}

		export interface ListRequest {
			folderId: string;
			maxResults?: number;
			pageToken?: string;
			q?: string;
		}

		export interface ListResponse extends AbstractResponse {
			kind: string;
			etag: string;
			selfLink: string;
			nextPageToken: string;
			nextLink: string;
			items: Children[];
		}

		export function get(request: GetRequest): Future<GetResponse>;
		export function list(request: ListRequest): Future<ListResponse>
	}

}