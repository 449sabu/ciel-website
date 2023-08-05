import { Center, Grid, MediaQuery, Stack, Text } from "@mantine/core";
import BlogCard from "@/components/Organisms/BlogCard";
import BlogCardMobile from "@/components/Organisms/BlogCardMobile";

const blog = () => {
	return (
		<Center maw={{ lg: "60rem" }} m="auto">
			<MediaQuery smallerThan="sm" styles={{ display: "none" }}>
				<Grid gutter={5} gutterXs="md" gutterMd="xl">
					{data.map((blog, index) => (
						<Grid.Col key={index} span={4}>
							<BlogCard
								image={blog.image}
								link={blog.link}
								title={blog.title}
								description={blog.description}
								rating={blog.rating}
								author={blog.author}
							/>
						</Grid.Col>
					))}
				</Grid>
			</MediaQuery>
			<MediaQuery largerThan="sm" styles={{ display: "none" }}>
				<Stack>
					<Text fz="3rem" fw="bold">
						BLOG
					</Text>
					{data.map((blog, index) => (
						// <Grid.Col key={index} span={4}>
						<BlogCardMobile
							key={index}
							image={blog.image}
							link={blog.link}
							title={blog.title}
							date={"23/08/02"}
							category={blog.rating}
							author={blog.author}
						/>
						// </Grid.Col>
					))}
				</Stack>
			</MediaQuery>
		</Center>
	);
};

export default blog;

const data = [
	{
		image: "https://i.imgur.com/Cij5vdL.png",
		link: "https://mantine.dev/",
		title: "ホームページが新しくなりました！",
		rating: "cardano",
		description:
			"Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",
		author: {
			name: "Yoshiki",
			image:
				"https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
		},
	},
	{
		image: "https://i.imgur.com/Cij5vdL.png",
		link: "https://mantine.dev/",
		title: "Catalyst Fund 10 について",
		rating: "Catalyst",
		description:
			"Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",
		author: {
			name: "Yoshiki",
			image:
				"https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
		},
	},
	{
		image: "https://i.imgur.com/Cij5vdL.png",
		link: "https://mantine.dev/",
		title: "Mesh の使い方",
		rating: "mesh",
		description:
			"この記事では、Cardano の dApp 開発をサポートする TypeScript ライブラリである「Mesh」について解説します。",
		author: {
			name: "Yoshiki",
			image:
				"https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
		},
	},
	{
		image: "https://i.imgur.com/Cij5vdL.png",
		link: "https://mantine.dev/",
		title: "Mesh の使い方",
		rating: "mesh",
		description:
			"この記事では、Cardano の dApp 開発をサポートする TypeScript ライブラリである「Mesh」について解説します。",
		author: {
			name: "Yoshiki",
			image:
				"https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
		},
	},
	{
		image: "https://i.imgur.com/Cij5vdL.png",
		link: "https://mantine.dev/",
		title: "Mesh の使い方",
		rating: "mesh",
		description:
			"この記事では、Cardano の dApp 開発をサポートする TypeScript ライブラリである「Mesh」について解説します。",
		author: {
			name: "Yoshiki",
			image:
				"https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
		},
	},
	{
		image: "https://i.imgur.com/Cij5vdL.png",
		link: "https://mantine.dev/",
		title: "Mesh の使い方",
		rating: "mesh",
		description:
			"この記事では、Cardano の dApp 開発をサポートする TypeScript ライブラリである「Mesh」について解説します。",
		author: {
			name: "Yoshiki",
			image:
				"https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
		},
	},
];
