CREATE TABLE `comments_table` (
	`id` int AUTO_INCREMENT NOT NULL,
	`postId` int NOT NULL,
	`userId` int NOT NULL,
	`content` varchar(1000) NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `comments_table_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `posts_table` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`title` varchar(255) NOT NULL,
	`content` varchar(1000) NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `posts_table_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `comments_table` ADD CONSTRAINT `comments_table_postId_posts_table_id_fk` FOREIGN KEY (`postId`) REFERENCES `posts_table`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `comments_table` ADD CONSTRAINT `comments_table_userId_users_table_id_fk` FOREIGN KEY (`userId`) REFERENCES `users_table`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `posts_table` ADD CONSTRAINT `posts_table_userId_users_table_id_fk` FOREIGN KEY (`userId`) REFERENCES `users_table`(`id`) ON DELETE no action ON UPDATE no action;