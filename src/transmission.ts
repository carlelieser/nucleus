import {exec} from "child_process"
import path from "path";
import EventEmitter from "events";
import {isDev} from "./utils";

class Transmission extends EventEmitter {
	private bin = isDev ? path.join("C:\\Users\\Carlos\\WebstormProjects\\nucleus\\", "lib", "transmission-cli") : path.join(__dirname, "../lib/transmission-cli");
	private daemon = path.join(this.bin, "transmission-daemon.exe");
	private remote = path.join(this.bin, "transmission-remote.exe");

	constructor() {
		super();
		this.start();
	}

	private start = () => {
		return new Promise((resolve) => {
			exec(this.daemon, resolve);
		});
	}

	public getFiles = (id: string): Promise<void> => {
		return new Promise((resolve) => {
			console.log(this.remote)
			const command = `${this.remote} -t ${id} -f`;
			exec(command, (error, stdout, stderr) => {
				const lines = stdout.split("\n").filter((value, index) => index > 1);
				const files = lines.map((line) => {
					const trimmed = line.trim();
					const size = trimmed.match(/\d.+\w(?=\s)/)

					console.log(trimmed, size)
				})
				console.log(lines);
				resolve();
			})
		})
	}

	public addTorrent = (pathOrMagnet: string) => {
		return new Promise((resolve) => {
			const command = `${this.remote} -a ${pathOrMagnet}`;
			exec(command, resolve)
		});
	}

}

export default Transmission;