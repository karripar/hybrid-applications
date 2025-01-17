import { getAuthor, getAllAuthors, updateAuthor, deleteAuthor, createAuthor } from "../src/api/models/authorModels";
import { Author } from "../src/types/LocalTypes";

const testAuthor: Author = {
  id: 0,
  name: 'Test Author',
  email: 'testauthor@test.com',
};

describe('Author functions', () => {
  it('createAuthor should return the new author', () => {
    try {
      const newAuthor = createAuthor(testAuthor);
      expect(newAuthor).toBeDefined();
      expect(newAuthor.name).toBe(testAuthor.name);
      expect(newAuthor.email).toBe(testAuthor.email);
      testAuthor.id = newAuthor.id;
    } catch (error) {
      fail(
        `Failed to create author: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  });

  it('getAuthor should return the author', () => {
    try {
      const foundAuthor = getAuthor(testAuthor.id);
      expect(foundAuthor).toBeDefined();
      expect(foundAuthor).toEqual(testAuthor);
    } catch (error) {
      fail(
        `Failed to get author: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  });

  it('getAllAuthors should return an array of authors', () => {
    try {
      const authors = getAllAuthors();
      expect(Array.isArray(authors)).toBe(true);
      authors.forEach((author) => {
        expect(author).toHaveProperty('id', expect.any(Number));
        expect(author).toHaveProperty('name', expect.any(String));
        expect(author).toHaveProperty('email', expect.any(String));
      });
    } catch (error) {
      fail(
        `Failed to get all authors: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  });

  it('updateAuthor should return the updated author', () => {
    try {
      const updatedAuthor = updateAuthor(testAuthor.id, 'Updated Author', 'updatedauthor@example.com',);
      expect(updatedAuthor).toBeDefined();
      expect(updatedAuthor.name).toBe('Updated Author');
      expect(updatedAuthor.email).toBe('updatedauthor@example.com');
    } catch (error) {
      fail(`Failed to update author: ${error instanceof Error ? error.message : 'Unknown error'}`,);
    }
  });

  it('deleteAuthor should delete the author', () => {
    try {
      deleteAuthor(testAuthor.id);
    } catch (error) {
      fail(`Failed to delete author: ${error instanceof Error ? error.message : 'Unknown error'}`,);
    }
  });

  it('getAuthor should throw error for non-existent article', () => {
    expect(() => getAuthor(9999999)).toThrow('Author not found');
  });
});
