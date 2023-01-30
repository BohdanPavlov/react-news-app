import { FC } from 'react';
import {
	Button,
	CardActionArea,
	CardActions,
	Typography,
	CardMedia,
	CardContent,
	Card,
} from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import parse from 'html-react-parser';

import { IArticle } from '../../types/articleTypes';
import { useNavigate } from 'react-router-dom';
import { convertDate } from '../../utils/convertDate';

import './ArticleCard.scss';

interface ArticleCardProps {
	article: IArticle;
}

const ArticleCard: FC<ArticleCardProps> = ({
	article: { id, title, imageUrl, summary, publishedAt },
}) => {
	const navigate = useNavigate();

	const convertedDate = convertDate(publishedAt);

	return (
		<Card
			sx={{
				maxWidth: 345,
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
			}}
			onClick={() => {
				navigate(`/react-news-app/${id}`);
			}}
		>
			<CardActionArea
				sx={{
					display: 'flex',
					flexDirection: 'column',
					flexBasis: '90%',
					justifyContent: 'flex-start',
				}}
			>
				<CardMedia component='img' height='200' image={imageUrl} alt={title} />
				<div className='created-at'>
					<CalendarMonthIcon color={'inherit'} />
					<p className='created-at__date'>{convertedDate}</p>
				</div>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{parse(title)}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{parse(summary)}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size='small' color='inherit'>
					Read more
					<ArrowRightAltIcon />
				</Button>
			</CardActions>
		</Card>
	);
};

export default ArticleCard;
