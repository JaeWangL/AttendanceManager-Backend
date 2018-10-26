CREATE TABLE [dbo].[TimeTables] (
    [Id]             INT              IDENTITY (1, 1) NOT NULL,
    [UserId]         INT              NOT NULL,
    [Day]            TINYINT          NOT NULL,
    [Period]         TINYINT          NOT NULL,
    CONSTRAINT [PK_TimeTables] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_TimeTables_Users_UserId] FOREIGN KEY ([UserId]) REFERENCES [dbo].[Users] ([Id]) ON DELETE CASCADE

);


GO
CREATE NONCLUSTERED INDEX [IX_TimeTables_UserId]
    ON [dbo].[TimeTables]([UserId] ASC) WHERE ([UserId] IS NOT NULL);