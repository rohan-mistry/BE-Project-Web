# Generated by Django 2.1.4 on 2019-01-06 12:08

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="IN_Project",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=100)),
                ("description", models.TextField()),
                (
                    "year_created",
                    models.DateTimeField(default=django.utils.timezone.now),
                ),
                ("year_published", models.DateTimeField(blank=True, null=True)),
                ("document", models.FileField(upload_to="")),
                ("contributers", models.TextField()),
                (
                    "domain",
                    models.CharField(
                        choices=[
                            (1, "none"),
                            (2, "Data Mining & Analytics"),
                            (3, "Machine Learning"),
                            (4, "Deep Learning"),
                            (5, "Image Processing/Computer Vision"),
                            (6, "Natural Language Processing/Artificial Intelligence"),
                            (7, "Networking/Security"),
                            (8, "Internet of Things(IOT)"),
                            (9, "Mobile Computing"),
                            (10, "Big Data"),
                            (11, "Cloud Computing"),
                            (12, "Computer Vision & Artificial Intelligence"),
                            (13, "Blockchain"),
                        ],
                        default="none",
                        max_length=100,
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Teacher",
            fields=[
                ("teacher_id", models.AutoField(primary_key=True, serialize=False)),
                ("teacher_name", models.CharField(max_length=150)),
                ("username", models.CharField(max_length=150)),
                ("password", models.CharField(max_length=256)),
                ("subject", models.CharField(max_length=150)),
            ],
        ),
        migrations.AddField(
            model_name="in_project",
            name="teacher_id",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="teachers",
                to="BEProjectsApp.Teacher",
            ),
        ),
    ]
