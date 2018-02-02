import { Compiler } from 'atma-io-middleware-base'
import * as yml from 'yamljs'

export default function process(content: string, file, compiler: Compiler, method: 'read' | 'write') {
	let data = content;
	if ('read' === method) {
		data = Yml.deserialize(content);
	}
	if ('write' === method) {
		data = Yml.serialize(content as any);
	}	
	return {
		content: data,
		sourceMap: null
	};
}

const Yml = {
		
	deserialize (content: string) {		
		content = content.replace(/\t/g, '  ');			
		return yml.parse(content);
	},
	
	serialize (json: object) {		
		return yml.stringify(
			JSON.parse(
				JSON.stringify(json)
			),
			4
		);
	}
};

