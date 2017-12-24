create table `projects` (
    `id` int unsigned not null auto_increment primary key,
    `user_id` int unsigned not null,
    `position` int not null default 1,
    `title` varchar(191) null,
    `url` varchar(191) null,
    `source` text null,
    `description` text null,
    `img_src` text null,
    `created_at` timestamp null,
    `updated_at` timestamp null
) default character set utf8mb4 collate utf8mb4_unicode_ci;

alter table `projects`
add constraint `projects_user_id_foreign`
foreign key (`user_id`) references `users` (`id`) on delete cascade;
