/*
articleId
id
contents
createdDate
like
author
*/

import {
    Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';

@Entity()
export default class Comment {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    articleId!: number;

    @Column()
    contents!: string;

    @Column()
    author!: string;

    @Column()
    like!: number;

    @CreateDateColumn()
    createdAt!: Date;
}