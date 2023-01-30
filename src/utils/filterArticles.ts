import { cloneDeep } from 'lodash';
import { ArticlesState, IArticle } from '../types/articleTypes';

export const filterArticlesBySearchedWords = (
	state: ArticlesState,
	words: string[]
) => {
	let filteredArticles;

	if (words.length !== 0 && words[0] !== '') {
		const filteredArticlesWithSameLinks = state.articles.filter((article) =>
			words.some(
				(word) =>
					isStringIncludesSearchedWord(article.title, word) ||
					isStringIncludesSearchedWord(article.summary, word)
			)
		);

		filteredArticles = filteredArticlesWithSameLinks.map((article) => {
			return cloneDeep(article);
		});
	} else {
		filteredArticles = state.articles.map((article) => {
			return cloneDeep(article);
		});
	}

	return highlightSearchedWordsInFilteredArticles(filteredArticles, words);
};

export const highlightSearchedWordsInFilteredArticles = (
	articles: IArticle[],
	words: string[]
) => {
	return articles.map((article) => {
		if (words.length !== 0 && words[0] !== '') {
			words.forEach((word: string) => {
				const searchedWordInTitle = searchWordInString(article.title, word);
				const searchedWordInSummary = searchWordInString(article.summary, word);

				article.title = searchedWordInTitle
					? replaceWordInStringWithSpan(searchedWordInTitle, article.title)
					: article.title;

				article.summary = searchedWordInSummary
					? replaceWordInStringWithSpan(searchedWordInSummary, article.summary)
					: article.summary;
			});
		}

		return article;
	});
};

function isStringIncludesSearchedWord(str: string, searchedWord: string) {
	return str.toLowerCase().split(' ').includes(searchedWord.toLowerCase());
}

function searchWordInString(str: string, word: string): string | undefined {
	return str
		.split(' ')
		.find((w: string) => w.toLowerCase() === word.toLowerCase());
}

function replaceWordInStringWithSpan(word: string, str: string): string {
	const pattern = `\\b(${word})\\b`;
	const regex = new RegExp(pattern, 'g');

	return str.replace(regex, '<span class="highlighted">' + word + '</span>');
}
