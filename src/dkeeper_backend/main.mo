import List "mo:base/List";

actor DKeepr {
  type Note = {
    title : Text;
    content : Text;
  };

  stable var notes = List.nil<Note>();

  public query func getNotes() : async [Note] {
    return List.toArray<Note>(notes);
  };

  public func addNote(title : Text, content : Text) {
    let newNote = {
      title = title;
      content = content;
    };
    notes := List.push<Note>(newNote, notes);
  };

  public func deleteNote(noteIndex : Nat) {
    let frontNotes = List.take(notes, noteIndex);
    let backNotes = List.drop(notes, noteIndex + 1);
    notes := List.append(frontNotes, backNotes);
  };
};
