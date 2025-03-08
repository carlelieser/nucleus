import {Torrent, TorrentFile} from "./types";
import {pick, reduce} from "lodash";
import {client, torrents} from "./store";
import {get} from "svelte/store";
import * as os from "os";
import * as path from "path";
import * as fs from "fs";
import * as process from "process";

export const isDev = process.env.NODE_ENV === "development";

// const torrentFileFromWebTorrentFile = (webtorrentFile: any): TorrentFile => {
// 	return pick(webtorrentFile, "name", "path", "done", "length", "downloaded", "progress", "type");
// }
//
// const torrentFromWebTorrent = (webtorrent: WebTorrentTorrent): Torrent => {
// 	return {
// 		id: webtorrent.magnetURI,
// 		files: webtorrent.files.map(torrentFileFromWebTorrentFile),
// 		...pick(webtorrent, "name", "progress", "downloaded", "downloadSpeed", "uploadSpeed", "timeRemaining", "path", "done")
// 	};
// }
//
// const torrentsFromWebTorrents = (webtorrents: Array<WebTorrentTorrent>) => {
// 	return reduce(webtorrents, (accumulator, webtorrent) => torrentFromWebTorrent(webtorrent), {});
// }
//
// const updateTorrent = (torrent: WebTorrentTorrent) => {
// 	torrents.update(state => {
// 		state[torrent.magnetURI] = torrentFromWebTorrent(torrent);
// 		return state;
// 	})
// }

export const addTorrent = (id: string, isFile: boolean = false) => {
	// const target = path.join(os.homedir(), "Downloads");
	// console.log(target, id, isFile)
	// get(client)[isFile ? "addFile" : "addUrl"](id, {"download-dir": target}, (err: any, arg: any) => {
	// 	console.log(err, arg)
	// });
}

export const removeTorrent = (id: string) => {
	// get(client).remove([id], () => {
	// 	torrents.update((state) => {
	// 		delete state[id];
	// 		return state;
	// 	});
	// });
}