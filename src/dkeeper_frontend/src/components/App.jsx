import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { dkeeper_backend as dkeeper } from "../../../declarations/dkeeper_backend";

function App() {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		fetchNotes();
	}, []);

	async function fetchNotes() {
		const notes = await dkeeper.getNotes();
		setNotes(notes);
	}

	async function addNote(newNote) {
		await dkeeper.addNote(newNote.title, newNote.content);
		fetchNotes();
	}

	async function deleteNote(noteIndex) {
		await dkeeper.deleteNote(noteIndex);
		fetchNotes();
	}

	return (
		<div>
			<Header />
			<CreateArea addNote={addNote} />
			{notes.map((note, index) => {
				return (
					<Note
						key={index}
						id={index}
						title={note.title}
						content={note.content}
						deleteNote={deleteNote}
					/>
				);
			})}
			<Footer />
		</div>
	);
}

export default App;
