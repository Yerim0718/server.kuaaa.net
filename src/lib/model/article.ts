/*
id
title
contents
createdDate
modifiedDate
view
like
author
scrap
*/

import {
    Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';

@Entity()
export default class Article {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column()
    contents!: string;

    @Column()
    author!: string;

    @Column()
    view!: number;

    @Column()
    like!: number;

    @Column()
    scrap!: number;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}