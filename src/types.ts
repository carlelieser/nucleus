export interface Torrent {
	id: string;
	name: string;
	done: boolean;
	files: Array<TorrentFile>;
	progress: number;
	downloaded: number;
	downloadSpeed: number;
	uploadSpeed: number;
	timeRemaining: number;
	path: string;
}

export interface TorrentFile {
	name: string;
	path: string;
	done: boolean;
	length: number;
	type: string;
	downloaded: number;
	progress: number;
}

export interface Torrents {
	[torrentId: string]: Torrent;
}