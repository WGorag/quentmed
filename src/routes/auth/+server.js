import { json } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

export function GET({url}) {
    const code = url.searchParams.get('code');
    const data = {code};
    const filePath = path.join(process.cwd(), 'data.json');
	fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
	return json(data);
}