CREATE TABLE [dbo].[Users] (
    [Id]        INT             IDENTITY (1, 1) NOT NULL,
    [Email]     NVARCHAR (255)  NULL,
    [Password]  NVARCHAR (255)  NULL,
    CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED ([Id] ASC)
);