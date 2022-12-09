import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import AddIcon from "@mui/icons-material/Add";

function CreateArea(props) {
	const [clicked, setIsClicked] = useState(false);

	const defaultNewNote = { title: "", content: "" };
	const [newNote, setNewNote] = useState(defaultNewNote);

	function updateNewNote(event) {
		const { name, value } = event.target;
		setNewNote((prevNewNote) => {
			return { ...prevNewNote, [name]: value };
		});
	}

	function submitNote(event) {
		props.addNote(newNote);
		setNewNote(defaultNewNote);
		event.preventDefault();
	}

	return (
		<div>
			<form className="create-note" onSubmit={submitNote}>
				{clicked && (
					<input
						name="title"
						placeholder="Title"
						value={newNote.title}
						onChange={updateNewNote}
					/>
				)}
				<textarea
					name="content"
					placeholder="Take a note..."
					rows={clicked ? 3 : 1}
					value={newNote.content}
					onClick={() => setIsClicked(true)}
					onChange={updateNewNote}
				/>
				{clicked && (
					<Zoom in={clicked}>
						<Fab type="submit">
							<AddIcon />
						</Fab>
					</Zoom>
				)}
			</form>
		</div>
	);
}

export default CreateArea;
